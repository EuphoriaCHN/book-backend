const Sequelize = require('sequelize');

class BookService {
  /**
   * 获取书单分类
   * 
   * @param {number} offset
   * @param {number} limit
   */
  async getBookList({ offset, limit, searchText }) {
    const { Op } = Sequelize;

    const condition = {
      limit,
      offset,
      group: 'book_id',
      where: {}
    };

    if (searchText) {
      // 可以按照书名、关键字搜索
      condition.where['address'] = {
        [Op.like]: `煤矿通用知识教材/%${searchText}%`
      };

      condition.where['keyword_1'] = {
        [Op.like]: `%${searchText}%`
      };

      condition.where['keyword_2'] = {
        [Op.like]: `%${searchText}%`
      };

      condition.where['keyword_3'] = {
        [Op.like]: `%${searchText}%`
      };
    }

    return await this.ctx.model.chapter.findAndCountAll(condition);
  }

  /**
   * 按照关键字模糊查询
   */
  async getKeyword(text) {
    const { Op } = Sequelize;

    return await this.ctx.model.keywordAssociation.find({
      where: {
        keyword: {
          [Op.like]: `%${text}%`
        }
      }
    });
  }
}

module.exports = new BookService();
