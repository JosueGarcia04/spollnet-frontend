import express from 'express'
import { register} from '../controllers/forms/sign_up.mjs';
import { credentials } from '../controllers/forms/login.mjs';
import { authenticateToken } from '../middleware/auth.mjs';
import { isAdmin } from '../middleware/admin.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);

router.get('/admin', authenticateToken, isAdmin, (req, res) => {
    res.status(200).json({ msg: 'Bienvenido, Admin' });
});

router.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({ msg: 'Bienvenido al dashboard' });
});