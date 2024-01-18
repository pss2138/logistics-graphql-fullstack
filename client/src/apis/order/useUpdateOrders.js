import { useMutation, gql } from "@apollo/client";

const UPDATE_ORDERS = gql`
  mutation UpdateOrders($orderInputs: [OrderInput]) {
    updateOrders(orderInputs: $orderInputs) {
      id
      adminComment

      orderStatus

      orderNumFrgn
      trackingNumUsa
      buyerName
      receiverName
      personalCustomsIdNum
      buyerPhone
      deliveryAddress
      deliveryMsg
      productName
      amount
      option
      memo
    }
  }
`;

export default function useUpdateOrders(orderInputs) {
  return useMutation(UPDATE_ORDERS, {
    variables: {
      orderInputs,
    },
    onCompleted: (data) => {
      console.log("useUpdateOrders completed:", data);
    },
    onError: (error) => {
      console.log("useUpdateOrders ERROR:", error);
    },
  });
}
