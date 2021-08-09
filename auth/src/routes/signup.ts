import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
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
      return res.status(400).json({ errors: errors.array() });
    }
    return res.json({ msg: "Signup" });
  }
);

export { router as signupRouter };
