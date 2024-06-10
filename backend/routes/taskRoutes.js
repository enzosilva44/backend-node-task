//// userRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require ('../controllers/taskController');

router.get('/', taskController.getAlltasks);
router.post('/register-task', taskController.postTask);
router.put('/edit-task', taskController.editTask);
router.delete('/delete-task', taskController.deleteTask);

module.exports = router;
