const httpStatus = require("http-status");
const { Domain } = require("../models");
const ApiError = require("../utils/ApiError");
const paginate = require("../utils/paginate");

const createDomain = async (DomainBody) => {
  return Domain.create(DomainBody);
};

const queryDomains = async (options) => {
  const result = await paginate(options, Domain);
  return {
    result,
  };
};

const getDomainById = async (id) => {
  return Domain.findById(id);
};

const updateDomainById = async (DomainId, updateBody) => {
  const domainResult = await getDomainById(DomainId);
  if (!domainResult) {
    throw new ApiError(httpStatus.NOT_FOUND, "Domain unavailable");
  }
  Object.assign(domainResult, updateBody);
  await domainResult.save();
  return domainResult;
};

const deleteDomainById = async (DomainId) => {
  const domainResult = await getDomainById(DomainId);
  if (!domainResult) {
    throw new ApiError(httpStatus.NOT_FOUND, "Domain unavailable");
  }
  await domainResult.remove();
  return domainResult;
};

module.exports = {
  createDomain,
  getDomainById,
  updateDomainById,
  deleteDomainById,
  queryDomains,
};
