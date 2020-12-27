import { gql } from "apollo-server";

const userType = gql`
  type User {
    id: ID!
    name: String!
    rooms: [Room]!
  }
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
`;

export default userType;
