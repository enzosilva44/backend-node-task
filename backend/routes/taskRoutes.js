//// userRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require ('../controllers/taskController');

router.get('/', taskController.getAlltasks);
router.post('/register-task', taskController.postTask);


//router.put('/edit-user', taskController.editUser);
//router.delete('/delete-user', taskController.deleteUser);

module.exports = router;
