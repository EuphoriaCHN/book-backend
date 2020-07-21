const path = require('path');

const STATUS_CODE = {
  SUCCESS: 1000,
  COMMON_ERROR: 1001
};

const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
};

const STATIC_DIR = path.resolve(__dirname, '../', 'static');

const makeGlobal = _global => {
  _global.STATUS_CODE = STATUS_CODE;
  _global.STATIC_DIR = STATIC_DIR;
  _global.HTTP_STATUS_CODE = HTTP_STATUS_CODE;
};

module.exports = makeGlobal;