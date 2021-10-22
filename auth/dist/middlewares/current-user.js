"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authentication = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (bearerHeader === undefined) {
    return res.status(401).send('Authentication Failed');
  }

  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  const token = bearerToken;
  return _jsonwebtoken.default.verify(token, 'secret', (error, data) => {
    if (error) {
      return res.status(401).send('Authentication Failed');
    }

    req.currentUser = data;
    return next();
  });
};

var _default = authentication;
exports.default = _default;