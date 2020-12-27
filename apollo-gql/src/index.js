import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/types/index";
import resolvers from "./schema/resolvers/index";
import { sequelize } from "./loaders/rdbLoader";
import { rdbModels as rdb } from "./models/rdb";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => {
    return { rdb };
  },
});

sequelize
  .sync({ force: false, alter: true })
  .then(async () => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(console.log);
