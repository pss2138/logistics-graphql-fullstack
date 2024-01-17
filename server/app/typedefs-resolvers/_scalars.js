import { gql } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";

const typeDefs = gql`
  scalar Date
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type: timestamp with time zone",
    serialize(value) {
      if (value instanceof Date) {
        return value.getTime();
      }
      throw Error("GraphQL Date Scalar serializer expected a `Date` object");
    },
    parseValue(value) {
      if (typeof value === "number") {
        return new Date(value);
      }
      throw Error("GraphQL Date Scalar parser expected a `number`");
    },
  }),
};

export default { typeDefs, resolvers };
