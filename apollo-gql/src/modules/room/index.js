import "graphql-import-node";
import * as typeDefs from "./room.graphql";
import { createModule } from "graphql-modules";
import { resolver } from "./room.resolver";
import { RoomProvider } from "./room.provider";

export const RoomModule = createModule({
  id: "room-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolver,
  providers: [RoomProvider],
});
