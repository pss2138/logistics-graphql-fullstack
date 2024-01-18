import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    orders: [Order]
  }
`;

export default typeDefs;