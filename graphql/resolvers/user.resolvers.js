const User = require("../../models/user.models");
const axios = require("axios");

const userResolvers = {
  Query: {
    getAllUsers: async () => await User.find(),
    deleteAllUsers: async () => {
      await User.deleteMany();
      return { message: "All User has been deleted" };
    },
  },
};

module.exports = userResolvers;
