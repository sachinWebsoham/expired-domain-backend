// src/index.js
const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/db");
const schema = require("./graphql");

// Connect to MongoDB
connectDB();

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
