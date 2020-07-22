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
      where: {},
      order: [['id', 'asc']]
    };

    if (searchText) {
      condition.where[Op.or] = [];
      // 可以按照书名、关键字搜索
      condition.where[Op.or].push({
        address: {
          [Op.like]: `煤矿通用知识教材/%${searchText}%`
        }
      }, {
        keyword_1: {
          [Op.like]: `%${searchText}%`
        }
      }, {
        keyword_2: {
          [Op.like]: `%${searchText}%`
        }
      }, {
        keyword_3: {
          [Op.like]: `%${searchText}%`
        }
      });
    }

    return await this.ctx.model.chapter.findAndCountAll(condition);
  }

  /**
   * 根据 ID 获取书籍详细信息
   * 
   * @param {string | number} id 书籍 id
   */
  async getBookById(id) {
    return await this.ctx.model.chapter.findAll({
      where: {
        book_id: id
      },
      order: [['id', 'asc']]
    });
  }
}

module.exports = new BookService();
