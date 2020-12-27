import { gql } from "apollo-server";

const messageType = gql`
  type Message {
    id: ID!
    content: String!
    postedBy: User!
    room: Room!
  }
  extend type Query {
    messages: [Message!]!
  }
  extend type Mutation {
    postMessage(input: postMessageInput!): Message!
  }
  input postMessageInput {
    content: String!
    userId: String!
    roomId: String!
  }
`;

export default messageType;
