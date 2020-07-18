const path = require('path');

const Config = require('./project.config');
const MSCConstructor = require('./MSCconstructor');

const SERVICE_PATH = path.resolve(Config.services);

module.exports = MSCConstructor(SERVICE_PATH);