import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import RequestValidationError from '../errors/request-validation-error';
import DatabaseConnectionError from '../errors/database-connection-error';
const router = express.Router();
router.post(
  "/api/user/signup",
  [
    body('email').isEmail().withMessage('Provide a valide email'),
    body('password')
      .trim()
      .isLength({ min: 3, max: 20 })
      .withMessage('Provide a valid password'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    console.log('Create a user');
    // res.send({});
    throw new DatabaseConnectionError();
  }
);

export { router as signupRouter };
