import GRPCDataSource from "apollo-datasource-grpc";
import { Injectable, Scope } from "graphql-modules";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { grpcserverConfig } from "../../config/grpcserver";

const PROTO_PATH = `${__dirname}/../../proto/room.proto`;
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).room;
const client = new proto.RoomController(
  `${grpcserverConfig.HOSTNAME}:${grpcserverConfig.PORT}`,
  grpc.credentials.createInsecure()
);

@Injectable({
  global: true,
})
export class RoomProvider extends GRPCDataSource {
  constructor() {
    super();
    this.client = client;
  }
  async getRooms() {
    const response = await this.callRPC(0, { rpcName: "List" });
    console.log("getRooms: ", response);
    return response;
  }
  async createRoom(name) {
    const response = await this.callRPC(0, {
      args: { name: name },
      rpcName: "Create",
    });
    console.log("createRoom: ", response);
    return response;
  }
}
