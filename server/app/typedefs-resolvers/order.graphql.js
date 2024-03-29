import { gql } from "apollo-server-express";
import {
  deleteOrders,
  getOrders,
  updateOrders,
} from "../controllers/order.controller.js";

const typeDefs = gql`
  type Order implements Base {
    id: ID
    adminComment: String
    isDeleted: Boolean

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
`;

const resolvers = {
  Mutation: {
    updateOrders: updateOrders,
    deleteOrders: deleteOrders,
  },

  Query: {
    orders: getOrders,
  },
};

export default { typeDefs, resolvers };
