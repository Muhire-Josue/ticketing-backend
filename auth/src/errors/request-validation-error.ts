import { ValidationError } from "express-validator";
import CustomError from "./custom-error";

export default class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public erros: ValidationError[]){
    super();
    // Only because we are exteding from a buil in class (Error)
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.erros.map(error => {return {message: error.msg, field: error.param}})
  }
}
