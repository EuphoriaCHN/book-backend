const path = require('path');

class IndexController {
  index = async ctx => {
    await ctx.render('index');
  };
}

module.exports = new IndexController();