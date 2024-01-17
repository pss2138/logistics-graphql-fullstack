import { gql } from "apollo-server-express";

const typeDefs = gql`
  input OrderInput {
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
`;

export default typeDefs;
