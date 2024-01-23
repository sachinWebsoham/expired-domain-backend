const { gql } = require("apollo-server");

const typeDefs = gql`
  type Domain {
    domain_link: String
    domain_length: String
    domain_backlinks: String
    domain_pop: String
    domain_creationDate: String
    domain_ACR: String
    domain_MMGR: String
    domain_DMOZ: String
    domain_reg: String
    domain_status_com: String
    domain_status_net: String
    domain_status_org: String
    domain_status_biz: String
    domain_status_info: String
    domain_status_de: String
    domain_addDate: String
    domain_related_cnobi: String
    domain_wikipedia_links: String
    domain_dropped: String
    domain_whois_status: String
  }
  type Mutation {
    addDomain: [Domain]
  }
  type domainResult {
    result: [Domain!]
    page: Int
    limit: Int
    totalPage: Int
    totalResult: Int
  }
  input paginationInput {
    limit: Int
    page: Int
  }
  type Query {
    getDomains(input: paginationInput): domainResult
  }
`;

module.exports = typeDefs;
