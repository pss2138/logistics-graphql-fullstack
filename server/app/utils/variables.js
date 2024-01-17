export const orderStatuses = [
  { id: 1, en: "initOrdered", label: { en: "Initial Order" } },
  { id: 2, en: "purchasedFGRN", label: { en: "Purchased In China" } },
  { id: 3, en: "deliveryOrdered", label: { en: "Deliverying In China" } },
  {
    id: 4,
    en: "trackingNumFGRNEntered",
    label: { en: "Foreign Delivery Number Entered" },
  },
  {
    id: 5,
    en: "trackingNumUsaEntered",
    label: { en: "Regional Delivery Number Entered" },
  },
  { id: 6, en: "deliveryCompleted", label: { en: "Delivery Completed" } },
  { id: 7, en: "purchaseConfirmed", label: { en: "Purchased Confirmed" } },
  { id: 9, en: "purchaseCanceled", label: { en: "Purchase Canceled" } },
];
