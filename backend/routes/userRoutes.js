//// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.post('/register', userController.postUser);

router.get('/register', userController.getAllUsers);

//teste
module.exports = router;
