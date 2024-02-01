import dotenv from "dotenv";
import expressConfig from "./config/express.js";

import { ApolloServer } from "apollo-server-express";
import queries from "./app/typedefs-resolvers/_queries.js";
import mutations from "./app/typedefs-resolvers/_mutations.js";
import enums from "./app/typedefs-resolvers/_enums.js";
import inputs from "./app/typedefs-resolvers/_inputs.js";
import scalars from "./app/typedefs-resolvers/_scalars.js";
import baseTypeDefs from "./app/typedefs-resolvers/base.js";
import orders from "./app/typedefs-resolvers/order.graphql.js";
import paymentsStripe from "./app/typedefs-resolvers/payment.stripe.graphql.js";
import { getUser } from "./app/utils/auth.js";

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const app = expressConfig();
const port = process.env.PORT || 4000;
startApolloServer();

async function startApolloServer() {
  const typeDefs = [
    queries,
    mutations,
    enums,
    inputs,
    // scalars,
    baseTypeDefs,
    orders.typeDefs,
    paymentsStripe.typeDefs,
  ];
  const resolvers = [
    // scalars.resolvers,
    orders.resolvers,
    paymentsStripe.resolvers,
  ];
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const token = req.headers.authorization || "";
      const user = await getUser(token);
      // Add the user to the context in graphql controllers
      return { user };
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: port }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
}

export default app;
