import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    orders: [Order]
    getSubscriptionStatus(paymentInput: PaymentInput): BaseResponse
  }
`;

export default typeDefs;
