"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _requestValidationError = require("../errors/request-validation-error");

var _user = _interopRequireDefault(require("../database/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.signupRouter = router;
router.post("/api/users/signup", [(0, _expressValidator.body)("email").isEmail().withMessage("Email must be valid"), (0, _expressValidator.body)("password").trim().isLength({
  min: 4,
  max: 20
}).withMessage("Password must be between 4 and 20 characters")], async (req, res) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    throw new _requestValidationError.RequestValidationError(errors.array());
  }

  const user = await _user.default.create(req.body);
  console.log("Creating a user..."); // throw new DatabaseConnectionError();

  res.status(201).send({
    data: user
  });
});