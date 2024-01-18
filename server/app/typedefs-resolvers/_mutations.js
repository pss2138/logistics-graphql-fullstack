import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Mutation {
    updateOrders(orderInputs: [OrderInput]): [Order]
  }
`;

export default typeDefs;
