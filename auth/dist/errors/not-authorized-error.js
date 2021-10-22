"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotAuthorizedError = void 0;

var _customError = require("./custom-error");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class NotAuthorizedError extends _customError.CustomError {
  constructor() {
    super('Not Authorized');

    _defineProperty(this, "statusCode", 401);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{
      message: 'Not authorized'
    }];
  }

}

exports.NotAuthorizedError = NotAuthorizedError;