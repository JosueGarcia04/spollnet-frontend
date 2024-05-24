import express from 'express'

import { registerStudent } from '../controllers/forms/sign_up.mjs';
import { credentials } from '../controllers/forms/login.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", registerStudent);
spollnetRouter.post("/login", credentials);

