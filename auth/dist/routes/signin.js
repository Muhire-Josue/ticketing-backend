"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../database/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.signinRouter = router;
router.post("/api/users/login", async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const user = await _user.default.findOne({
    where: {
      email
    }
  });

  if (!user) {
    return res.status(404).send({
      error: 'User not found'
    });
  }

  const hashedPassword = _bcrypt.default.hashSync(password, 10);

  const passwordMatches = _bcrypt.default.compareSync(password, hashedPassword);

  if (!passwordMatches) {
    return res.status(401).send({
      error: 'Incorrect password'
    });
  }

  const token = _jsonwebtoken.default.sign({
    id: user.id,
    email
  }, "secret");

  return res.status(401).send({
    data: {
      email,
      id: user.id
    },
    token
  });
});