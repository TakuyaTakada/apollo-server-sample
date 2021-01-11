import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/types";
import resolvers from "./schema/resolvers";
import { rdb } from "./loaders/rdb";

const server = new ApolloServer({ typeDefs, resolvers });

rdb
  .sync({ force: false, alter: true })
  .then(async () => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(console.error);
