const nodeXlsx = require('node-xlsx');

class UploadController {
  uploadKeywordExcel = async ctx => {
    ctx.body = {
      data: await ctx.service.index.index(),
    };
  }
}

module.exports = new UploadController();