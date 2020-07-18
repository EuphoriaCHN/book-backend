const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { logger, LOGGER_TYPE } = require('./util/util');

const Config = require('./config/project.config');
const Router = require('./router');
const Database = require('./config/sequelize.config');

const Controller = require('./config/controller.config');
const Service = require('./config/service.config');
const Model = require('./config/models.config');

const app = new Koa();

app.use(bodyParser());

// 给每个 Service 上添加 App 上下文
// 实现在 Service 中直接 this.ctx
Object.values(Service).forEach(value => {
  Object.assign(value, {
    ctx: app.context,
  });
});
logger('Bind this.ctx to Service Object', LOGGER_TYPE.SUCCESS);

// 将 Service 和 Model 绑定在 ctx 中
Object.assign(app.context, {
  service: Service,
  model: Model,
});
logger('Bind ctx on Service & Model', LOGGER_TYPE.SUCCESS);

// 将 Controller 绑定到 app instance 上
Object.assign(app, {
  controller: Controller,
});
logger('Bind Controller to Application', LOGGER_TYPE.SUCCESS);

Router(app);

app.listen(Config.port, () => {
  logger(`🚀 服务在 ${Config.port} 端口上启动成功～`, LOGGER_TYPE.SUCCESS);

  Database.connect();
});