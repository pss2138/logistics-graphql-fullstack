import { gql } from "apollo-server-express";

const typeDefs = gql`
  input OrderInput {
    id: ID
    orderStatus: OrderStatus!

    orderNumFrgn: String
    trackingNumUsa: String
    buyerName: String!
    receiverName: String!
    personalCustomsIdNum: String
    buyerPhone: String
    deliveryAddress: String!
    deliveryMsg: String
    productName: String!
    amount: Int!
    option: String
    memo: String
  }

  input PaymentInput {
    paymentIntent: String
    isCardSave: Boolean
  }
`;

export default typeDefs;
