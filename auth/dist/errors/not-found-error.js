"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = void 0;

var _customError = require("./custom-error");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class NotFoundError extends _customError.CustomError {
  constructor() {
    super('Route not found');

    _defineProperty(this, "statusCode", 404);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{
      message: 'Not Found'
    }];
  }

}

exports.NotFoundError = NotFoundError;