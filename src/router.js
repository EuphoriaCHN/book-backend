const Router = require('koa-router');

module.exports = app => {
  const router = new Router();
  const { controller } = app;

  router.get('/', controller.index.index);

  return app.use(router.routes()).use(router.allowedMethods());
};