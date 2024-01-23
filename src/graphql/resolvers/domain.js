const { Domain } = require("../../models");
const { domainService } = require("../../services");
const resolvers = {
  Query: {
    getDomains: async (parent, { input }) => {
      const result = await domainService.queryDomains(input);
      return {
        totalResult: result.result.totalResult,
        totalPage: result.result.totalPage,
        limit: result.result.limit,
        page: result.result.page,
        result: result.result.result,
      };
    },
  },
  Mutation: {
    // addDomain: async (parent, arg) => {
    //   let failed;
    //   let success;
    //   try {
    //     console.log(domainsData.length, "length");
    //     await Promise.all(
    //       domainsData.map(async (domain) => {
    //         const result = await Domain.create(domain.DomainDetail);
    //         if (result) {
    //           success += 1;
    //         }
    //         {
    //           failed += 1;
    //         }
    //       })
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   console.log(failed, "= failed");
    //   console.log(success, "= success");
    //   const getData = await Domain.find();
    //   return getData;
    // },
  },
};
module.exports = resolvers;
