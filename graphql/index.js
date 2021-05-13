//Utils
const merge = require("lodash/merge");
const { mergeTypes } = require("merge-graphql-schemas");

const PostTypeDefs = require("./typeDefs/post.typeDefs");
const userTypeDefs = require("./typeDefs/user.typeDefs");

const postResolvers = require("./resolvers/post.resolvers");
const userResolvers = require("./resolvers/user.resolvers");

const rootTypeDefs = mergeTypes([PostTypeDefs, userTypeDefs]);
const rootResolvers = merge(userResolvers, postResolvers);

module.exports = { typeDefs: rootTypeDefs, resolvers: rootResolvers };

// import merge from "lodash/merge";
// import { mergeTypes } from "merge-graphql-schemas";
// import UserSchema from "./User.schema";
// import UserResolvers from "./User.resolvers";
// import PostSchema from "./Post.schema";
// import PostResolvers from "./Post.resolvers";
// import LinkSchema from "./Link.schema";
// import LinkResolvers from "./Link.resolvers";

// const typeDefs = mergeTypes([UserSchema, PostSchema, LinkSchema]);
// const resolvers = merge(UserResolvers, PostResolvers, LinkResolvers);

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
