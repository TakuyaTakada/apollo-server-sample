import { createApplication } from "graphql-modules";
import { RoomModule } from "./room";
import { UserModule } from "./user";

const application = createApplication({
  modules: [RoomModule, UserModule],
});

const schema = application.schema;

export default schema;
