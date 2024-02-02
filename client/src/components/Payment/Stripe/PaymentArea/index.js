import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import useCreatePaymentIntent from "../../../../apis/payment/stripe/useCreatePaymentIntent";
import PaymentForm from "../PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentArea = ({}) => {
  const paymentInfoMutation = useCreatePaymentIntent();
  const [stripePromise, setStripePromise] = useState(undefined);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState("");

  const options = {
    clientSecret: paymentInfoMutation.data?.clientSecret,
  };

  useEffect(() => {
    paymentInfoMutation[0]();
  }, []);

  useEffect(() => {
    if (paymentInfoMutation.data?.clientSecret) {
      setStripePromise(loadStripe(paymentInfoMutation.data.clientSecret));
    }
    if (paymentInfoMutation.data?.paymentMethods?.data.length > 0) {
      // Set the first saved card as a paymentMethod, if exists
      setSelectedPaymentMethodId(
        paymentInfoMutation.data.paymentMethods.data[0].id
      );
    }
  }, [paymentInfoMutation]);

  return (
    <Styles.Container>
      {!paymentInfoMutation.loading &&
      paymentInfoMutation.data?.clientSecret &&
      stripePromise ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm
            paymentInfo={paymentInfoMutation.data}
            selectedPaymentMethodId={selectedPaymentMethodId}
            setSelectedPaymentMethodId={setSelectedPaymentMethodId}
          />
        </Elements>
      ) : (
        <Styles.Text>loading...</Styles.Text>
      )}
    </Styles.Container>
  );
};

export default PaymentArea;
