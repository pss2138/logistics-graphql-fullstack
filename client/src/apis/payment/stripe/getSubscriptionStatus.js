import apiRequest from "../../apiRequest";

export default function getSubscriptionStatus(paymentIntent, isCardSave) {
  return apiRequest.get("/payment/stripe", {
    paymentIntent,
    isCardSave,
  });
}
