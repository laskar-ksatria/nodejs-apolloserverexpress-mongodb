const { gql } = require("apollo-server-express");

const UserTypeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
  }

  type Message {
    message: String
  }

  type Query {
    getAllUsers: [User]
    deleteAllUsers: Message
  }
`;

module.exports = UserTypeDefs;
