/**
 * ORM 初始化
 *
 * @author Wang Qinhong
 * @copyright XUST KCSoft
 */

const Sequelize = require('sequelize');
const DatabaseConfig = require('./database.config.js');
const { logger, LOGGER_TYPE } = require('../util/util');

const { database, userName, password, host, port } = DatabaseConfig;

const sequelize = new Sequelize(database, userName, password, {
  host,
  port,
  dialect: 'mysql',
  logging: console.log, // 开启日志
  omitNull: true, // 将 undefined 转换为 NULL
  // 连接池配置
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

const Database = {
  sequelize,
  connect: async () => {
    logger('👉 开始连接数据库...', LOGGER_TYPE.LOG);
    return sequelize
      .authenticate()
      .then(() => {
        logger('📖 数据库连接成功', LOGGER_TYPE.SUCCESS);
      })
      .catch(err => {
        logger('❌ 数据库连接失败', LOGGER_TYPE.ERROR);
        console.error(err);
        process.exit();
      });
  },
};

module.exports = Database;