import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRoute } from './routes/signout';

const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRoute);

app.listen(3000, () => console.log('listening on port 3000'));