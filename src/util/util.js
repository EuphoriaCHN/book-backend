const chalk = require('chalk');

const LOGGER_TYPE = {
  INFO: 'INFO',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  ROUTER: 'ROUTER',

  LOG: 'LOG',
};

const logger = (text, type = LOGGER_TYPE.INFO) => {
  switch (type) {
    case LOGGER_TYPE.INFO:
      console.log(`${chalk.cyan('[INFO]')} ${text}`);
      break;
    case LOGGER_TYPE.ERROR:
      console.log(`${chalk.red('[ERROR]')} ${text}`);
      break;
    case LOGGER_TYPE.WARNING:
      console.log(`${chalk.yellow('[WARNING]')} ${text}`);
      break;
    case LOGGER_TYPE.SUCCESS:
      console.log(`${chalk.green('[SUCCESS]')} ${text}`);
      break;
    case LOGGER_TYPE.ROUTER:
      console.log(`${chalk.gray('[ROUTER]')} ${text}`);
      break;
    case HTTP_STATUS_CODE.SUCCESS:
      console.log(`${chalk.green('[200]')} ${text}`);
      break;
    case HTTP_STATUS_CODE.NOT_FOUND:
      console.log(`${chalk.red('[404]')} ${text}`);
      break;
    case HTTP_STATUS_CODE.INTERNAL_ERROR:
      console.log(`${chalk.red('[500]')} ${text}`);
      break;
    default:
      console.log(`${chalk.gray('[LOG]')} ${text}`);
  }
}

exports.LOGGER_TYPE = LOGGER_TYPE;
exports.logger = logger;