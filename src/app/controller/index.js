class IndexController {
  async index(ctx) {
    ctx.body = {
      data: await ctx.service.index.index(),
    };
  }
}

module.exports = new IndexController();