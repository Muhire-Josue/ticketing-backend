"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sequelize = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var _config2 = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = process.env.NODE_ENV || 'development';
const config = _config2.default[env];
// const {use_env_variable, ...restConfig} = config;
const sequelize = new _sequelize.Sequelize(process.env[config.use_env_variable], config);
exports.sequelize = sequelize;
const db = {
  sequelize
};
var _default = db;
exports.default = _default;