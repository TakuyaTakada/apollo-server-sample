import GRPCDataSource from "apollo-datasource-grpc";
import { Injectable } from "graphql-modules";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { grpcserverConfig } from "../../config/grpcserver";

const PROTO_PATH = `${__dirname}/../../proto/user.proto`;
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).user;
const client = new proto.UserController(
  `${grpcserverConfig.HOSTNAME}:${grpcserverConfig.PORT}`,
  grpc.credentials.createInsecure()
);

@Injectable({
  global: true,
})
export class UserProvider extends GRPCDataSource {
  constructor() {
    super();
    this.client = client;
  }
  async getUser(id) {
    const response = await this.callRPC(0, {
      args: { id: id },
      rpcName: "Retrieve",
    });
    console.log("getUser: ", response);
    return response;
  }
}
