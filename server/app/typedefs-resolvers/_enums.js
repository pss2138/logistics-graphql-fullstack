import { gql } from "apollo-server-express";

const typeDefs = gql`
  enum OrderStatus {
    initOrdered
    purchasedFGRN
    deliveryOrdered
    trackingNumFGRNEntered
    trackingNumUsaEntered
    deliveryCompleted
    purchaseConfirmed
    purchaseCanceled
  }
`;

export default typeDefs;
