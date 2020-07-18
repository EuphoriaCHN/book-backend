const path = require('path');
const Config = require('./project.config.js');
const MSCConstructor = require('./MSCconstructor.js');

const CONTROLLER_PATH = path.resolve(Config.controllers);

module.exports = MSCConstructor(CONTROLLER_PATH);