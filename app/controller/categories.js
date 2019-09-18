'use strict';
const BaseController = require('./base');
class CategoriesController extends BaseController {
  async index() {
    await this.getPager({
      modelName: 'Category',
      searchFields: ['name'],
    });
  }

  async create() {
    const { ctx } = this;
    let category = ctx.request.body;
    try {
      let doc = await ctx.model.Category.findOne(category);
      if (doc) {
        this.error(new Error('添加分类失败，分类已存在'));
      } else {
        category = await ctx.model.Category.create(category);
        this.success('添加分类成功');
      }
    } catch (err) {
      this.error(err);
    }
  }

  async update() {
    const { ctx } = this;
    let id = ctx.params.id;
    let category = ctx.request.body;
    try {
      await ctx.model.Category.updateOne({ _id: id }, { $set: category });
      this.success('更新分类成功');
    } catch (err) {
      this.error(err);
    }
  }

  async destroy() {
    const { ctx } = this;
    try {
      let id = ctx.params.id;
      let { ids = [] } = ctx.request.body;
      ids.push(id);
      await ctx.model.Category.deleteMany({ _id: { $in: ids } });
      this.success('删除分类成功');
    } catch (err) {
      this.error(err);
    }
  }
}
module.exports = CategoriesController;
