import { gql } from "apollo-server";
import userType from "./userType";
import roomType from "./roomType";
import messageType from "./messageType";

const rootType = gql`
  type Query
  type Mutation
`;

export default [rootType, userType, roomType, messageType];
