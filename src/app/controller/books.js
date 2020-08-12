const assert = require('assert');

class BookController {
  /**
   * 获取书单分类
   *
   * @param {number} offset
   * @param {number} limit
   */
  getBookList = async (ctx) => {
    const { offset, limit, searchText } = ctx.request.query;

    const data = await ctx.service.books.getBookList({
      offset: parseInt(offset),
      limit: parseInt(limit),
      searchText,
    });

    // 查询关键字
    const keywordList = await ctx.service.keyword.getKeyword(searchText);

    data.keyword = keywordList;

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data,
    });
  };

  /**
   * 根据 ID 获取书籍详细信息
   *
   * @param {string | number} id 书籍 id
   */
  getBookById = async (ctx) => {
    let { id } = ctx.request.query;

    assert(id, 'Book id is required parameter!');

    // 去除末尾多余的 0
    id = `${id}`.split(/0+$/)[0];
    assert(id.length >= 4, 'Invalied book id!');

    const data = await ctx.service.books.getBookById(id);

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data,
    });
  };

  /**
   * 获取一本书
   *
   * @param {string} address 按照 address 模糊搜索
   * @param {string | number} bookId 按照 book id 搜索
   */
  getOneBook = async (ctx) => {
    const { address, bookId } = ctx.request.query;

    const data = await ctx.service.books.getOneBook({
      address,
      bookId,
    });

    // 如果有了书本 ID 限制，那么就再搜寻一次不带限制的
    let withOutId = null;
    if (bookId) {
      withOutId = await ctx.service.books.getOneBook({
        address,
      });
    }

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
      data: {
        target: data,
        other: withOutId,
      },
    });
  };
}

module.exports = new BookController();
