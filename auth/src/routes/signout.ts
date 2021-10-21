import express, { Request, Response } from "express";
import authentication from '../middlewares/current-user';
const router = express.Router();
router.get("/api/users/logout", authentication, (req: Request, res: Response) => {
  req.currentUser = undefined;
  return res.send({});
});

export { router as signoutRouter };
