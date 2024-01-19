const domainType = require("./domain");
const { merge } = require("lodash");

const typeDefs = merge(domainType);

module.exports = typeDefs;
