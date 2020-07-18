/**
 * 自动拉取 MSC 模块
 *
 * @author Wang Qinhong
 * @copyright XUST KCSoft
 */

const fs = require('fs');
const path = require('path');

module.exports = MSCpath => {
  if (!MSCpath) {
    return {};
  }
  const MSCFileName = fs.readdirSync(MSCpath, 'utf-8');
  const MSCModules = {};

  MSCFileName.forEach(fileName => {
    const MSCName = fileName.replace(/\.\w*/, '');
    MSCModules[MSCName] = require(path.join(MSCpath, fileName));
  });

  return MSCModules;
};