const httpStatus = require("http-status");
const ApiError = require("./ApiError");
const paginate = async (options = { page: 1, limit: 20 }, Model) => {
  if (options.page >= 1 && options.limit >= 1) {
    const { limit, page } = options;
    const skip = page * limit;
    const result = await Model.find().skip(skip).limit(limit);
    const totalResult = await Model.countDocuments();
    const totalPage = Math.ceil(totalResult / limit);
    return {
      result,
      page,
      limit,
      totalPage,
      totalResult,
    };
  } else {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      "Page and Limit not must be greater than one"
    );
  }
};
module.exports = paginate;
