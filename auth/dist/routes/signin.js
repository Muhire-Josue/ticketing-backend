"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinRouter = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.signinRouter = router;
router.post('/api/user/signin', () => {});