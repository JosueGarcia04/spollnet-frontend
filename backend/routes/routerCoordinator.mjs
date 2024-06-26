import express from 'express';
import { adminLogin } from '../controllers/admin/login.mjs';
import { authenticateAdminToken } from '../middlewares/authAdmin.mjs';

export const adminRouter = express.Router();

adminRouter.post('/admin/login', adminLogin);

adminRouter.get('/admin/dashboard', authenticateAdminToken, (req, res) => {
  res.status(200).json({ msg: 'Bienvenido al dashboard del administrador' });
});
