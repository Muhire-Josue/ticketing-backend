"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _index = require("./index");

class User extends _sequelize.Model {}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  password: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  sequelize: _index.sequelize,
  tableName: 'Users',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
var _default = User;
exports.default = _default;