"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const common = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  logging: false,
  seederStorage: 'sequelize',
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000
  }
};
const config = {
  development: { ...common
  },
  test: { ...common,
    use_env_variable: 'DATABASE_URL_TEST'
  },
  staging: { ...common
  },
  production: { ...common
  }
};
module.exports = config;
var _default = config;
exports.default = _default;