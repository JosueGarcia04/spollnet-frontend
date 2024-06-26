import express from 'express';
import { register } from '../controllers/forms/sign_up.mjs';
import { credentials } from '../controllers/forms/login.mjs';
import { authenticateToken } from '../middlewares/auth.mjs';
import { isAdmin } from '../middlewares/admin.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);

spollnetRouter.get('/admin', authenticateToken, isAdmin, (req, res) => {
    res.status(200).json({ msg: 'Bienvenido, Admin' });
});

spollnetRouter.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({ msg: 'Bienvenido al dashboard' });
});
