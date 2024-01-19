// src/graphql/schema/index.js
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema/types");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

module.exports = schema;
