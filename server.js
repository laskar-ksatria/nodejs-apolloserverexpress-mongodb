const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");

//TypeDefs
const { resolvers, typeDefs } = require("./graphql");
// const typeDefs = require("./typeDefs");
// const resolvers = require("./resolver");

//Running Server
const startServer = async () => {
  const app = express();

  app.use(cors());

  //MongoDB Connect
  await mongoose.connect("mongodb://localhost/graphql-errHandler-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //Define ApolloSerer
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  //MiddleWare
  apolloServer.applyMiddleware({ app });

  console.log("mongoose connected");

  app.listen(4000, () => console.log("Server in running on port 4000"));
};

startServer();
