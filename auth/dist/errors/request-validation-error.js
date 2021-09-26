"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestValidationError = void 0;

var _customError = require("./custom-error");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RequestValidationError extends _customError.CustomError {
  constructor(errors) {
    super('Invalid request parameters'); // Only because we are extending a built in class

    _defineProperty(this, "statusCode", 400);

    this.errors = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return {
        message: err.msg,
        field: err.param
      };
    });
  }

}

exports.RequestValidationError = RequestValidationError;