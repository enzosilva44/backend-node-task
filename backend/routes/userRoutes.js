//// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/', userController.getAllUsers);

router.post('/register', userController.postUser);

router.put('/edit-user', userController.editUser);

module.exports = router;
