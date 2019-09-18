'use strict';
const BaseController = require('./base');
class ArticlesController extends BaseController {
  async index() {
    const { ctx } = this;
    await this.getPager({
      modelName: 'Article',
      searchFields: ['title', 'content'],
      populateFields: ['user', 'category'],
    });
  }

  async create() {
    const { ctx } = this;
    try {
      let article = ctx.request.body;
      article.user = this.user;
      article = await ctx.model.Article.create(article);
      this.success('添加文章成功');
    } catch (err) {
      this.error(err);
    }
  }

  async update() {
    const { ctx } = this;
    try {
      let article = ctx.request.body;
      let id = ctx.params.id;
      await ctx.model.Article.updateOne({ _id: id }, article);
      this.success('文章更新成功');
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
      await ctx.model.Article.deleteMany({ _id: { $in: ids } });
      this.success('文章删除成功');
    } catch (err) {
      this.error(err);
    }
  }

  async addPv() {
    const { ctx } = this;
    let id = ctx.params.id;
    try {
      await ctx.model.Article.updateOne({ _id: id }, { $inc: { pv: 1 } });
      this.success('文章pv更新成功');
    } catch (err) {
      this.error(err);
    }
  }

  async addComment() {
    const { ctx } = this;
    try {
      let id = ctx.params.id;
      let comment = ctx.request.body;
      comment.user = this.user;
      await ctx.model.Article.updateOne(
        { _id: id },
        {
          $push: { comments: comment },
        }
      );
      this.success('评论成功');
    } catch (err) {
      this.error(err);
    }
  }
}
module.exports = ArticlesController;
