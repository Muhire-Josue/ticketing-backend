"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireAuth = void 0;

var _notFoundError = _interopRequireDefault(require("../errors/not-found-error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new _notFoundError.default();
  }
};

exports.requireAuth = requireAuth;