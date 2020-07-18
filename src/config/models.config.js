const path = require('path');
const Sequelize = require('sequelize');

const Config = require('./project.config.js');
const MSCConstructor = require('./MSCconstructor.js');
const Database = require('./sequelize.config.js');

const MODELS_PATH = path.resolve(Config.models);

const models = MSCConstructor(MODELS_PATH);

Object.keys(models).forEach(value => {
  // 直接用 Sequelize 实例去初始化所有的 Model 实例
  const modalInstance = models[value](Database.sequelize, Sequelize.DataTypes);

  const camelModelName = value.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase());
  delete models[value];

  models[camelModelName] = modalInstance;
});

module.exports = models;