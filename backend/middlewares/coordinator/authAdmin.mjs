import jwt from 'jsonwebtoken';

export const authenticateAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, admin) => {
    if (err) return res.sendStatus(403);
    if (admin.role !== 'admin') return res.sendStatus(403);
    req.admin = admin;
    next();
  });
};
