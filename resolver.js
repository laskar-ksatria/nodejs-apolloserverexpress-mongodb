const mongoose = require("mongoose");
const Post = require("./models/post.model");
const MongoDBUser = require("./models/user.models");
const { errHandler } = require("./helpers/errHandler");

const {
  AuthenticationError,
  UserInputError,
  ApolloError,
} = require("apollo-server-express");

const resolvers = {
  // UserResult: {
  //   __resolveType: (obj) => {
  //     console.log(obj);
  //     if (obj.error_code) {
  //       return "Error Internal";
  //     } else {
  //       return "Success";
  //     }
  //   },
  // },
  Query: {
    getAllUsers: async () => {
      console.log("HALLO");
      await MongoDBUser.find();
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      console.log("HALLO MUTATION");
      let { username, email, password } = args.user;
      // if (username === "" || !username) throw new UserInputError("FAILED");
      try {
        const newUser = await MongoDBUser.create({ username, email, password });
        console.log("MASUK SUCCESS");
        return {
          __typename: "User",
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        };
      } catch (error) {
        console.log("This is error");
        let newError = errHandler(error);
        return {
          __typename: "ErrorInput",
          message: newError.message,
          error_code: 1,
        };
      }
    },
  },
};

// const Post = require("./models/post.model");
// const {
//   AuthenticationError,
//   UserInputError,
// } = require("apollo-server-express");

// const { GraphQLError } = require("graphql");

// const resolvers = {
//   Query: {
//     getAllPost: async () => {
//       return await Post.find();
//     },
//   },
//   Mutation: {
//     createPost: async (parent, args, context, info) => {
//       let { title, description } = args;
//       try {
//         let newPost = await Post.create({ title, description });
//         return newPost;
//       } catch (error) {
//         throw error;
//       }
//     },
//   },
// };

module.exports = resolvers;

// const resolvers = {
//   Query: {
//     user: async (parent, args, context) => {
//       const userRecord = await context.db.findUserById(args.id);
//       if (userRecord) {
//         return {
//           __typename: "User",
//           ...userRecord,
//         };
//       }
//       return {
//         __typename: "UserNotFound",
//         message: `The user with the id ${args.id} does not exist.`,
//       };
//     },
//   },
// };
