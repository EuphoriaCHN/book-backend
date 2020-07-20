const assert = require('assert');

class BookController {
  /**
   * 获取书单分类
   * 
   * @param {number} offset
   * @param {number} limit
   */
  getBookList = async ctx => {
    const { offset, limit, searchText } = ctx.request.query;

    const data = await ctx.service.books.getBookList({
      offset: parseInt(offset),
      limit: parseInt(limit),
      searchText
    });

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data
    });
  };
}

module.exports = new BookController();