import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Mutation {
    updateOrders(orderInputs: [OrderInput]): [Order]
    deleteOrders(orderIds: [ID]): BaseResponse
  }

  type BaseResponse {
    message: String
  }
`;

export default typeDefs;
