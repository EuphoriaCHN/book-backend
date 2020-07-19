const Router = require('koa-router');

module.exports = app => {
  const router = new Router();
  const { controller } = app;

  router.get('/book/getBookList', controller.books.getBookList);

  router.get('/upload/uploadBooksExcel', controller.upload.uploadBooksExcel);
  router.get('/upload/uploadKeywordExcel', controller.upload.uploadKeywordExcel);

  return app.use(router.routes()).use(router.allowedMethods());
};