// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  jwt.verify(token, 'seuSegredo', (err, decoded) => { // Substitua 'seuSegredo' por sua chave secreta real
    if (err) {
      return res.status(401).json({ message: 'Token de autenticação inválido' });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = { verifyToken };
