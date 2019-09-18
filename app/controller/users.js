'use strict';
const BaseController = require('./base');
class UsersController extends BaseController {
  async signup() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      user = await ctx.model.User.create(user);
      ctx.session.user = user;
      this.success({ user });
    } catch (err) {
      this.error(err);
    }
  }

  async signin() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      user = await ctx.model.User.findOne(user);
      if (user) {
        this.success({ user });
      } else {
        this.error(new Error('登录失败，用户不存在'));
      }
    } catch (err) {
      this.error(err);
    }
  }

  async signout() {
    const { ctx } = this;
    ctx.session.user = null;
    this.success('退出成功');
  }
}
module.exports = UsersController;
