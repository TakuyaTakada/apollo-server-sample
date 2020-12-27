import { gql } from "apollo-server";
import userType from "./userType";
import roomType from "./roomType";

const RootType = gql`
  type Query
  type Mutation
`;

export default [RootType, userType, roomType];
