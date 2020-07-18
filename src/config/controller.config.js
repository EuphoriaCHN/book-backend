const path = require('path');
const Config = require('./project.config.js');
const MSCConstructor = require('./MSCconstructor.js');
const { logger, LOGGER_TYPE } = require('../util/util');

const CONTROLLER_PATH = path.resolve(Config.controllers);

const MSCResult = MSCConstructor(CONTROLLER_PATH);

Object.keys(MSCResult).forEach(controller => {
  Object.keys(MSCResult[controller]).forEach(method => {
    const _ = MSCResult[controller][method];
    MSCResult[controller][method] = null;
    MSCResult[controller][method] = async ctx => {
      try {
        await _(ctx);
      } catch (error) {
        logger(error.message, LOGGER_TYPE.ERROR);
        return (ctx.body = {
          status_code: STATUS_CODE.COMMON_ERROR,
          message: error.message
        });
      }
    };
  });
});

module.exports = MSCResult;