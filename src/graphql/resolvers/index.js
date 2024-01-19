const domainResolver = require("./domain");
const { merge } = require("lodash");

const resolvers = merge(domainResolver);

module.exports = resolvers;
