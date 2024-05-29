// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Exemplo de uma rota de usuário
router.get('/', (req, res) => {
    res.send('Lista de usuários');
});

module.exports = router;
