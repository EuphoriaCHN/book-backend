/**
 * 项目配置文件
 *
 * @author Wang Qinhong
 * @copyright XUST KCSoft
 */

const path = require('path');

const APP_PATH = path.resolve(__dirname, '../', 'app');

module.exports = {
  port: 8000,
  controllers: path.resolve(APP_PATH, 'controller'),
  services: path.resolve(APP_PATH, 'service'),
  models: path.resolve(APP_PATH, 'model'),
  view: path.resolve(APP_PATH, '..', 'static', 'dist')
};