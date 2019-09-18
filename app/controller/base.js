'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  async getPager({ modelName = '', searchFields = [], populateFields = [] }) {
    const { ctx } = this;
    let { pageNum = 1, pageSize = 5, keyword = '' } = ctx.query;
    pageNum = isNaN(parseInt(pageNum)) ? 1 : parseInt(pageNum);
    pageSize = isNaN(parseInt(pageSize)) ? 5 : parseInt(pageSize);
    let query = {};
    if (keyword && searchFields.length > 0) {
      query['$or'] = searchFields.map(field => ({
        [field]: new RegExp(keyword),
      }));
    }
    try {
      let total = await ctx.model[modelName].countDocuments(query);
      let result = ctx.model[modelName]
        .find(query)
        .skip((pageNum - 1) * pageSize);

      if (pageSize > -1) result = result.limit(pageSize);
      populateFields.forEach(field => {
        result = result.populate(field);
      });
      let items = await result.exec();
      this.success({
        items,
        pageNum,
        pageSize,
        pageCount: Math.ceil(total / pageSize),
        total,
      });
    } catch (err) {
      this.error(err);
    }
  }

  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }

  error(error) {
    this.ctx.body = {
      code: 1,
      error: error.message,
    };
  }
}
module.exports = BaseController;
