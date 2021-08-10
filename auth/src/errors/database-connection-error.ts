import CustomError from "./custom-error";

export default class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Database connection error";
  construtor() {
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
