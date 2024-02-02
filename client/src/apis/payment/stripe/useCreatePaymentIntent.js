import { gql, useMutation } from "@apollo/client";

const STRIPE_CREATE_PAYMENT_INTENT = gql`
  mutation StripeCreatePaymentIntent {
    stripeCreatePaymentIntent {
      id

      clientSecret
      email
      publishableKey
      paymentMethods {
        id
      }
    }
  }
`;

export default function useCreatePaymentIntent() {
  return useMutation(STRIPE_CREATE_PAYMENT_INTENT, {
    onCompleted: (data) => {
      console.log("useCreatePaymentIntent completed:", data);
    },
    onError: (error) => {
      if (error.networkError) {
        console.log("useCreatePaymentIntent ERROR:", error.networkError.result);
      } else {
        console.log("useCreatePaymentIntent ERROR:", error);
      }
    },
  });
}
