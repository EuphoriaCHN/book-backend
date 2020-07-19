class BookService {
  /**
   * 获取书单分类
   * 
   * @param {number} offset
   * @param {number} limit
   */
  async getBookList({ offset, limit }) {
    return await this.ctx.model.chapter.findAndCountAll({
      limit,
      offset,
      group: 'book_id'
    });
  }
}

module.exports = new BookService();
