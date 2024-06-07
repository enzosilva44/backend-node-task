//// userRoutes.js
//const CadastrosUsuarios = require('../controllers/userController');
//const express = require('express');
//const router = express.Router();
//
//// Rota para obter um usuário pelo ID
//router.get('/:id', CadastrosUsuarios.getUserById);
//
//// Rota para registrar um usuário
//router.post('/register', CadastrosUsuarios.postUser);
////router.post('/register', authController.authenticateUser);
//
//
//module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para login
// Rota para login
router.post('/register', userController.postUser);

router.get('/register', (req, res) => {
    res.send('Hello World!');
});

//teste
sgrf
module.exports = router;
