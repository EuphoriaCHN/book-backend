const Router = require('koa-router');

module.exports = (app) => {
  const router = new Router();
  const { controller } = app;

  router.get('/book/getBookList', controller.books.getBookList);
  router.get('/book/getBookById', controller.books.getBookById);
  router.get('/book/getChapter', controller.books.getChapter);
  router.get('/book/getOneChapter', controller.books.getOneChapter);

  router.get('/upload/uploadBooksExcel', controller.upload.uploadBooksExcel);
  router.get(
    '/upload/uploadKeywordExcel',
    controller.upload.uploadKeywordExcel
  );

  router.get('/', controller.index.index);

  return app.use(router.routes()).use(router.allowedMethods());
};
