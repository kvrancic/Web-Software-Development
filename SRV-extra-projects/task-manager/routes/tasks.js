const express = require('express'); 
const router = express.Router(); 
const {getAllTasks, createTask, getTask, deleteTask, updateTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;