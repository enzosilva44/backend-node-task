const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para login (POST)
router.post('/login', authController.authenticateUser);

// Rota para login (GET)
//router.get('/login', (req, res) => {
//  res.send('Tela de login');
//});

module.exports = router;
