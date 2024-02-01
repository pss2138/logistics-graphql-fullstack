import { gql } from "apollo-server-express";
import {
  getSubscriptionStatus,
  stripeCreatePaymentIntent,
} from "../controllers/payment.controller.js";

const typeDefs = gql`
  type PaymentInfo implements Base {
    id: ID
    adminComment: String

    clientSecret: String!
    email: String
    publishableKey: String!
    paymentMethods: [PaymentMethod]
  }

  type PaymentMethod {
    id: String
  }
`;

const resolvers = {
  Query: {
    getSubscriptionStatus: getSubscriptionStatus,
  },

  Mutation: {
    stripeCreatePaymentIntent: stripeCreatePaymentIntent,
  },
};

export default { typeDefs, resolvers };
