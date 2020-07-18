const Router = require('koa-router');

module.exports = app => {
  const router = new Router();
  const { controller } = app;

  router.get('/upload/uploadKeywordExcel', controller.upload.uploadKeywordExcel);

  return app.use(router.routes()).use(router.allowedMethods());
};