const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service, config, app } = this;
    const list = await service.news.list(ctx.query.pageNum ? ctx.query.pageNum : 1, config.news.pageSize);
    const title = app.cache ? app.cache.title : '默认标题';
    await ctx.render('index', { list, title });
  }
}

module.exports = HomeController;