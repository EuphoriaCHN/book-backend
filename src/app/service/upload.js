class UploadService {
  async uploadKeywordExcel(keywordObjectWithJSONObject) {
    return await this.ctx.model.keywordAssociation.bulkCreate(keywordObjectWithJSONObject, {
      updateOnDuplicate: ["keyword"]
    });
  }

  async uploadBooksExcel(bookObjectWithJSONObject) {
    return await this.ctx.model.chapter.bulkCreate(bookObjectWithJSONObject);
  }
}

module.exports = new UploadService();