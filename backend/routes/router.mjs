import express from 'express'

import { registerStudent } from '../controllers/forms/sign_up';
import { loginStudent } from '../controllers/forms/login.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", registerStudent);
spollnetRouter.get("/login", loginStudent);

