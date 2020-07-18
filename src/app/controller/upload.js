const nodeXlsx = require('node-xlsx');
const path = require('path');

class UploadController {
  uploadKeywordExcel = async ctx => {
    // 读取 keyword 数据表
    const keywordObject = nodeXlsx.parse(path.resolve(STATIC_DIR, 'keyword.xlsx'));

    const { data } = keywordObject[0];

    data.shift();

    // 数据表字段
    const databaseRowDefination = ['id', 'keyword', 'asso1', 'asso2', 'asso3'];

    const keywordObjectWithJSONObject = data.map(row => {
      const data = {};
      for (let i = 0; i < databaseRowDefination.length; i++) {
        if (i >= row.length) {
          data[databaseRowDefination[i]] = null;
          continue;
        }
        let col = row[i];
        if (databaseRowDefination[i] === 'id') {
          col = parseInt(col);
        }
        data[databaseRowDefination[i]] = col;
      }
      return data;
    });

    // 送入 Service 进行 bulkCreate
    // await ctx.service.upload.uploadKeywordExcel(keywordObjectWithJSONObject);

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
    });
  }

  uploadBooksExcel = async ctx => {
    // 读取 keyword 数据表
    const keywordObject = nodeXlsx.parse(path.resolve(STATIC_DIR, 'books.xlsx'));

    const { data } = keywordObject[0];

    data.shift();

    // 数据表字段
    const databaseRowDefination = ['id', 'description', 'bookId', 'address', 'keyword1', 'keyword2', 'keyword3'];

    const bookObjectWithJSONObject = data.map(row => {
      const data = {};
      for (let i = 0; i < databaseRowDefination.length; i++) {
        if (i >= row.length) {
          data[databaseRowDefination[i]] = null;
          continue;
        }
        let col = row[i];
        if (['id', 'bookId'].includes(databaseRowDefination[i])) {
          col = parseInt(col);
        }
        data[databaseRowDefination[i]] = col;
      }
      return data;
    });

    // 送入 Service 进行 bulkCreate
    await ctx.service.upload.uploadBooksExcel(bookObjectWithJSONObject);

    return (ctx.body = {
      status_code: STATUS_CODE.SUCCESS,
    });
  };
}

module.exports = new UploadController();