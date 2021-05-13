const { gql } = require("apollo-server-express");

const PostTypeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    getAllPost: [Post]
  }
`;

module.exports = PostTypeDefs;
