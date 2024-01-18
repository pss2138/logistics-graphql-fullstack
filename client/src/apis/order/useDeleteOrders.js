import { useMutation, gql } from "@apollo/client";

const DELETE_ORDERS = gql`
  mutation DeleteOrders($orderIds: [ID]) {
    mutate(orderIds: $orderIds) {
      Order
    }
  }
`;

export default function useDeleteOrders(orderIds) {
  return useMutation(DELETE_ORDERS, {
    variables: {
      orderIds,
    },
    onCompleted: (data) => {
      console.log("useDeleteOrders completed:", data);
    },
    onError: (error) => {
      console.log("useDeleteOrders ERROR:", error);
    },
  });
}
