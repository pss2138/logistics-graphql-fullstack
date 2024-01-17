import { useQuery, gql } from "@apollo/client";

const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
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

export default function useOrders() {
  return useQuery(GET_ORDERS);
}
