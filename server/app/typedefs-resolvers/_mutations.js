import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Mutation {
    createOrder(order: OrderInput): Order
  }
`;

export default typeDefs;
