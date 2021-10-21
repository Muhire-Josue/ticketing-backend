import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../database/models/user";

const router = express.Router();
router.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if(!user) {
    return res.status(404).send({error: 'User not found'});
  }
  const hashedPassword = bcrypt.hashSync(password,10);
  const passwordMatches = bcrypt.compareSync(password, hashedPassword);
  if (!passwordMatches) {
    return res.status(401).send({error: 'Incorrect password'});
  }
  const token = jwt.sign({ id: user.id, email }, "secret");
  return res.status(401).send({data:{email, id: user.id}, token});
});

export { router as signinRouter };
