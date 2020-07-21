const Sequelize = require('sequelize')

class KeywordService {
  /**
   * 按照关键字模糊查询
   */
  async getKeyword(text) {
    if (!text) {
      return [];
    }
    const { Op } = Sequelize;

    return await this.ctx.model.keywordAssociation.findAll({
      where: {
        keyword: {
          [Op.like]: `%${text}%`
        }
      },
      order: Sequelize.literal(`replace(keyword, "${text}", "")`)
    });
  }
}

module.exports = new KeywordService();