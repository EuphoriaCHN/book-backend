const path = require('path');

const STATUS_CODE = {
  SUCCESS: 1000,
  COMMON_ERROR: 1001
};

const STATIC_DIR = path.resolve(__dirname, '../', 'static');

const makeGlobal = _global => {
  _global.STATUS_CODE = STATUS_CODE;
  _global.STATIC_DIR = STATIC_DIR;
};

module.exports = makeGlobal;