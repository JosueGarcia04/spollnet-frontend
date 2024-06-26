import express from 'express';
import { register } from '../controllers/forms/sign_up.mjs';
import { credentials } from '../controllers/forms/login.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);
