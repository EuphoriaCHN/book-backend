class UploadService {
  async uploadKeywordExcel(keywordObjectWithJSONObject) {
    return await this.ctx.model.keywordAssociation.bulkCreate(keywordObjectWithJSONObject, { updateOnDuplicate: ["keyword"] });
  }
}

module.exports = new UploadService();