"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseConnectionError = void 0;

var _customError = require("./custom-error");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DatabaseConnectionError extends _customError.CustomError {
  constructor() {
    super("Error connecting to db");

    _defineProperty(this, "statusCode", 500);

    _defineProperty(this, "reason", "Error connecting to database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{
      message: this.reason
    }];
  }

}

exports.DatabaseConnectionError = DatabaseConnectionError;