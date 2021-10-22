"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signoutRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _common = require("@mjmodules/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import authentication from '../middlewares/current-user';
// @ts-ignore
const router = _express.default.Router();

exports.signoutRouter = router;
router.get("/api/users/logout", _common.authentication, (req, res) => {
  req.currentUser = undefined;
  return res.send({});
});