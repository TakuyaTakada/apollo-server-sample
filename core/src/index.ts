import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/types";
import resolvers from "./schema/resolvers";
import { rdb } from "./loaders/rdb";
import { mongo } from "./loaders/mongo";
import { createDatasource } from "./datasources";

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  dataSources: createDatasource,
});

const mongodb = mongo.connection;

mongodb.on("error", console.error.bind(console, "connection error"));
mongodb.once("open", () => console.log("Connected MongoDB successfully."));

rdb
  .sync({ force: false, alter: true })
  .then(async () => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(console.error);
