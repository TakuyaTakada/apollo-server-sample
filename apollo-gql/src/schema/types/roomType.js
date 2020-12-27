import { gql } from "apollo-server";

const roomType = gql`
  type Room {
    id: ID!
    name: String!
    members: [User]
  }
  extend type Query {
    rooms: [Room!]!
  }
  extend type Mutation {
    createRoom(input: createRoomInput!): Room!
  }
  input createRoomInput {
    name: String!
  }
`;

export default roomType;
