import { gql } from "apollo-server";

const userType = gql`
  type User {
    id: ID!
    name: String!
    rooms: [Room]!
  }

  type Token {
    accessToken: String!
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
  input passwordAuthInput {
    email: ID!
    password: String!
  }
  extend type Mutation {
    signUp(input: passwordAuthInput!): Boolean!
    signIn(input: passwordAuthInput!): Token!
  }
`;

export default userType;
