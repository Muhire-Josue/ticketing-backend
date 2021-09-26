"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signoutRouter = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.signoutRouter = router;
router.post("/api/user/signout", () => {});