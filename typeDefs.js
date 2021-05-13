const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type User {
    id: ID
    email: String
    username: String
    password: String
  }

  type Modification_Error {
    code: Int
    status: Int
    message: String
  }

  type Query {
    getAllPost: [Post]
    getAllUsers: [User]
  }

  type ErrorInput {
    message: [String]
    error_code: Int
  }

  input PostInput {
    title: String
    description: String
  }

  input UserInput {
    username: String
    email: String
    password: String
  }

  union UserResult = User | ErrorInput

  type Mutation {
    createPost(post: PostInput): Post
    createUser(user: UserInput): UserResult
  }
`;

module.exports = typeDefs;
