import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  errorMsgs,
  handleStripeError,
  successMsgs,
} from "../../../../utils/variables";
import getSubscriptionStatus from "../../../../apis/payment/stripe/getSubscriptionStatus";
import { toastError, toastSuccess } from "../../../../style/styleUtils";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../PaymentDropdown/styles";

const PaymentForm = ({
  paymentInfo,
  selectedPaymentMethodId,
  setSelectedPaymentMethodId,
}) => {
  // UI
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard4Digit, setSelectedCard4Digit] = useState(undefined);
  const cardStyle = {
    style: {
      base: {
        color: "#90A0B7",
        fontSize: "14px",
        "::placeholder": {
          color: "#90A0B7",
          fontWeight: 400,
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handlePaymentSuccessed = () => {
    toastSuccess(successMsgs.PAYMENT_SUCCESS.message);
    navigate("/");
  };

  useEffect(() => {
    if (selectedCard4Digit) {
      const paymentMethodIdBy4Digit = paymentInfo.paymentMethods.find(
        (paymentMethod) => {
          return paymentMethod.card.last4 === selectedCard4Digit;
        }
      ).id;
      setSelectedPaymentMethodId(paymentMethodIdBy4Digit);
    } else {
      setSelectedPaymentMethodId(undefined);
    }
  }, [selectedCard4Digit]);

  // Data
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isCardSave, setIsCardSave] = useState(false);
  const savedCards4Digit = paymentInfo.paymentMethods
    ? paymentInfo.paymentMethods.map(
        (savedPaymentMethod) => savedPaymentMethod.card.last4
      )
    : [];

  useEffect(() => {
    if (selectedPaymentMethodId) {
      const initialCard4Digit = paymentInfo.paymentMethods.find(
        (paymentMethod) => {
          return paymentMethod.id === selectedPaymentMethodId;
        }
      ).card.last4;
      setSelectedCard4Digit(initialCard4Digit);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        paymentInfo.clientSecret,
        {
          payment_method: selectedPaymentMethodId
            ? selectedPaymentMethodId
            : {
                card: elements.getElement(CardElement),
              },
          setup_future_usage: isCardSave ? "off_session" : null,
          receipt_email: paymentInfo.email,
        }
      );

      if (error) {
        throw error;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        const subscriptionStatus = getSubscriptionStatus(
          paymentIntent,
          isCardSave
        );

        if (subscriptionStatus.data === "succeeded") {
          handlePaymentSuccessed();
        } else {
          toastError(errorMsgs.PAYMENT_FAILED.message);
        }
      }
    } catch (error) {
      const errorMsg = handleStripeError(error);
      setMessage(errorMsg);
    }
    setIsLoading(false);
  };

  return (
    <Styles.Container>
      <form id="payment-form" onSubmit={handleSubmit}>
        <text>Monthly : $29</text>

        <Dropdown
          placeholder="Select a saved card"
          optionsArray={savedCards4Digit}
          selectedOption={selectedCard4Digit}
          setSelectedOption={setSelectedCard4Digit}
          style={{
            width: "100%",
            backgroundColor: "#2F313E",
            border: "1px solid #48506C",
          }}
        />

        {!selectedPaymentMethodId && (
          <>
            <Styles.SubTitle>Card information</Styles.SubTitle>
            <Styles.CardElementBg>
              <CardElement id="card-element" options={cardStyle} />
            </Styles.CardElementBg>
            <Styles.CheckCardSave
              onClick={() => {
                setIsCardSave(!isCardSave);
              }}
              isCardSave={isCardSave ? true : undefined}
            >
              <img
                src={
                  !isCardSave
                    ? "../../icons/check_circle_grey.svg"
                    : "../../icons/check_circle_green.svg"
                }
              />
              <span>Save this card for the next time</span>
            </Styles.CheckCardSave>
            {message && (
              <Styles.PaymentErrorMsg id="payment-message">
                {message}
              </Styles.PaymentErrorMsg>
            )}
          </>
        )}

        <Styles.SubmitBtn
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">Pay now</span>
        </Styles.SubmitBtn>
      </form>
    </Styles.Container>
  );
};

export default PaymentForm;
