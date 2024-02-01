import React from "react";
import * as GlobalStyles from "../../style/global";
import PageHeader from "../../components/Global/PageHeader";
import PaymentArea from "../../components/Payment/Stripe/PaymentArea";

const PaymentPage = () => {
  ////////////////
  // UI
  ////////////////

  ////////////////
  // Data
  ////////////////

  return (
    <>
      <GlobalStyles.Container>
        <PageHeader title="Subscription" />

        <GlobalStyles.PageContainer>
          <PaymentArea />
        </GlobalStyles.PageContainer>
      </GlobalStyles.Container>
    </>
  );
};

export default PaymentPage;
