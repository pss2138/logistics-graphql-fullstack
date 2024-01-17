import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Mutation {
    updateOrder(order: OrderInput): Order
  }
`;

export default typeDefs;
