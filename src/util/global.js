const STATUS_CODE = {
  SUCCESS: 1000,
  COMMON_ERROR: 1001
};

const makeGlobal = _global => {
  _global.STATUS_CODE = STATUS_CODE;
};

module.exports = makeGlobal;