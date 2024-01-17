import { gql } from "apollo-server-express";

const typeDefs = gql`
  interface Base {
    id: ID
    adminComment: String
  }
`;

export default typeDefs;
