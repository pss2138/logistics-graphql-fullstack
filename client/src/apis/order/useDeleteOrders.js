import { useMutation, gql } from "@apollo/client";

const DELETE_ORDERS = gql`
  mutation DeleteOrders($orderIds: [ID]) {
    deleteOrders(orderIds: $orderIds) {
      message
    }
  }
`;

export default function useDeleteOrders(orderIds, handleDeleteSuccess) {
  return useMutation(DELETE_ORDERS, {
    variables: {
      orderIds,
    },
    onCompleted: (data) => {
      if (data.deleteOrders.message === "ok") {
        handleDeleteSuccess();
      }
    },
    onError: (error) => {
      if (error.networkError) {
        console.log("useDeleteOrders ERROR:", error.networkError.result);
      } else {
        console.log("useDeleteOrders ERROR:", error);
      }
    },
  });
}
