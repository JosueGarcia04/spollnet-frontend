import express from 'express'

import { registerStudent } from '../controllers/su.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", registerStudent);

