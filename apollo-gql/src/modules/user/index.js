import "graphql-import-node";
import * as typeDefs from "./user.graphql";
import { createModule } from "graphql-modules";
import { resolver } from "./user.resolver";
import { UserProvider } from "./user.provider";
import { AuthProvider } from "./auth.provider";

export const UserModule = createModule({
  id: "user-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolver,
  providers: [UserProvider, AuthProvider],
});
