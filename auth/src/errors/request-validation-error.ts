import { ValidationError } from "express-validator";

export default class RequestValidationError extends Error {
  constructor(public erros: ValidationError[]){
    super();
    // Only because we are exteding from a buil in class (Error)
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
}
