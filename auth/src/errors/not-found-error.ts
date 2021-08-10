import CustomError from "./custom-error";

export default class NotFoundError extends CustomError {
  statusCode = 404;
  construtor() {
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
