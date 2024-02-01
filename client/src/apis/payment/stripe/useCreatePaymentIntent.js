import { gql, useMutation } from "@apollo/client";

const STRIPE_CREATE_PAYMENT_INTENT = gql`
  mutation StripeCreatePaymentIntent {
    stripeCreatePaymentIntent {
      PaymentInfo
    }
  }
`;

export default function useCreatePaymentIntent() {
  return useMutation(STRIPE_CREATE_PAYMENT_INTENT);
}
