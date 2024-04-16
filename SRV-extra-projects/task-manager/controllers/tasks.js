const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({message: error});
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task: task});
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const getTask = async (req, res) => {
    try {
        const{id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task) return res.status(404).json({msg: 'No task with id : ${taskID}'})
        res.status(200).json({_id:taskID})
    } catch (error) {
        res.status(500).json({message: error})
    }
};
const deleteTask = async (req, res) => {
    try {
        const{id:taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id: taskID});
        if(!task){
            return res.status(404).json({msg: 'No task with id: ${taskID}'})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({message: error})
    }
};
const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true, runValidators: true
        }) //prvi par filter, drugi nove vr, treći opcije
        if(!task){
            return res.status(404).json({msg: 'No task with id: ${taskID}'})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {  //ODMA EXPORTAMO KAO OBJEKT JER PRETPOSTAVLJAMO DA ĆE BITI VIŠE FUNKCIJA 
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
};