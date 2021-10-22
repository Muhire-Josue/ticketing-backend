"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentUserRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.currentUserRouter = router;
router.get('/api/users/current', (req, res) => {
  const bearerHeader = req.headers.authorization;

  if (bearerHeader === undefined) {
    return res.status(401).send({
      error: 'Token Undefined'
    });
  }

  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  return _jsonwebtoken.default.verify(bearerToken, 'secret', (error, data) => {
    if (error) {
      return res.status(402).send({
        error: 'invalid Token'
      });
    }

    return res.status(200).send({
      data
    });
  });
});