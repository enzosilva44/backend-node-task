// userRoutes.js
const CadastrosUsuarios = require('../controllers/userController');
const {Router} = require('express');	
const router = Router();

// Rota para obter um usuário pelo ID
router.get('/:id', CadastrosUsuarios.getUserById);

// Rota para registrar um usuário
router.post('/postUser', CadastrosUsuarios.postUser);

module.exports = router;
