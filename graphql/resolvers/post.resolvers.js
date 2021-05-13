const Post = require("../../models/post.model");

const postResolvers = {
  Query: {
    getAllPost: async () => await Post.find(),
  },
};

module.exports = postResolvers;
