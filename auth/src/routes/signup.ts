import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import jwt from "jsonwebtoken";
import User from "../database/models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    const { passoword, email } = req.body;

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const userExists = await User.findOne({ where: { email } });
    if(userExists){
      return res.status(409).send({error: 'User already exists'})
    }
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user.id, email }, "secret");
    res.status(201).send({ data: user, token });
  }
);

export { router as signupRouter };
