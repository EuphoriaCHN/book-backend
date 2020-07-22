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

    // 查询关键字
    const keywordList = await ctx.service.keyword.getKeyword(searchText);

    data.keyword = keywordList;

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data
    });
  };

  /**
   * 根据 ID 获取书籍详细信息
   * 
   * @param {string | number} id 书籍 id
   */
  getBookById = async ctx => {
    const { id } = ctx.request.query;

    assert(id, 'Book id is required parameter!');
    assert(`${id}`.length >= 4, 'Invalied book id!');

    const data = await ctx.service.books.getBookById(`${id}`.slice(0, 4));

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data
    });
  };
}

module.exports = new BookController();