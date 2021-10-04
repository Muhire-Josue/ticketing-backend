import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.get('/api/user/currentuser', (req, res) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader === undefined) {
    return res.status(401).send({error: 'Token Undefined'});
  }
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  return jwt.verify(bearerToken, 'secret', (error, data) => {
    if (error) {
      return res.status(402).send({error: 'invalid Token'});
    }
    return res.status(200).send({data});
  });
});

export { router as currentUserRouter };