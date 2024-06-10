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
const userController = require ('../controllers/userController');

router.post('/register', userController.postUser);

router.get('/register', userController.getAllUsers);

//teste
module.exports = router;
