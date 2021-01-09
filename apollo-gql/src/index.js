import { ApolloServer } from "apollo-server";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
import typeDefs from "./schema/types/index";
import resolvers from "./schema/resolvers/index";
import { rdbLoader } from "./loaders/rdbLoader";
import { mongoLoader } from "./loaders/mongoLoader";
import { rdbModels as rdb } from "./models/rdb";
import { mongoModels as mongo } from "./models/mongo";
import { cognito } from "./config/auth";

console.log("test")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => {
    return { rdb, mongo, cognito };
  },
});

const mongodb = mongoLoader.connection;
mongodb.on("error", console.error.bind(console, "connection error"));
mongodb.once("open", () => console.log("Connected MongoDB successfully."));

rdbLoader
  .sync({ force: false, alter: true })
  .then(async () => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(console.log);
