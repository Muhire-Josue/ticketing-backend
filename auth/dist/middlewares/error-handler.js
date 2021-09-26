"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;

var _customError = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof _customError.CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
  }

  res.status(400).send({
    errors: [{
      message: 'Something went wrong'
    }]
  });
  console.log(`err`, err);
};

exports.errorHandler = errorHandler;