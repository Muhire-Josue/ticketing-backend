"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _bodyParser = require("body-parser");

var _currentUser = require("./routes/current-user");

var _signin = require("./routes/signin");

var _signout = require("./routes/signout");

var _signup = require("./routes/signup");

var _errorHandler = require("../src/middlewares/error-handler");

var _notFoundError = require("../src/errors/not-found-error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _bodyParser.json)());
app.use(_currentUser.currentUserRouter);
app.use(_signin.signinRouter);
app.use(_signout.signoutRouter);
app.use(_signup.signupRouter);
app.all('*', async (req, res) => {
  throw new _notFoundError.NotFoundError();
});
app.use(_errorHandler.errorHandler);
app.listen(4000, () => {
  console.log('Listening on port 4000!!!!!!!!');
});