import { GraphQLError } from "graphql";
import { getPriceId, getUser } from "../utils/auth.js";
import Stripe from "stripe";

const stripe = Stripe(process.env.SERVER_STRIPE_SECRET_KEY);

export const stripeCreatePaymentIntent = async (parent, args, contextValue) => {
  if (!contextValue.user) return null;
  const priceId = getPriceId();

  try {
    const subscription = await stripe.subscription.create({
      customer: contextValue.user.id,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });
    // TODO: save subscription data in database

    const paymentMethods = await stripe.customers
      .listPaymentMethods(user.stripeId, { limit: 5 })
      .data.map((pm) => pm.card.last4);

    const paymentInfo = {
      id: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      email: user.email,
      publishableKey: process.env.CLIENT_STRIPE_PUBLISHABLE_KEY,
    };

    if (paymentMethods.length > 0) paymentInfo.paymentMethods = paymentMethods;

    return paymentInfo;
  } catch (e) {
    console.log(e);
    return new GraphQLError(e);
  }
};

export const getSubscriptionStatus = async (req, res) => {
  if (!req.body || !req.body.paymentIntent) {
    return res.status(400).json({ message: "payment intent is empty" });
  }

  const latestSubscription = await stripe.subscriptions.list({ limit: 1 });
  const token = req.headers.authorization || "";

  try {
    const user = await getUser(token);
    // check if subscription has no error with Stripe
    // & if user's subscription status "isSubscribing" is true
    if (user.isSubscribing === true && latestSubscription.length > 0) {
      return res.status(200).json({
        message: "success",
      });
    }
    return res.status(401).json({
      message: "user is not subscribing",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};
