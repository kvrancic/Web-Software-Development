const express = require ('express'); 
const app = express ();
const tasks = require('./routes/tasks') ;
const PORT = 3000;
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware 
app.use(express.static('./public'));
app.use(express.json()); // OMOGUĆAVA PODATKE U REQ.BODY 

app.use('/api/v1/tasks', tasks) // NAMJEŠTA DEFAULTNU RUTU - bez parametara!



//app.get('/api/v1/tasks')      - get all tasks
//app.post('/api/v1/tasks')     - create new task
//app.get('/api/v1/tasks/:id')  - get a single task 
//app.patch('/api/v1/tasks/:id') - update task 
//app.delete('/api/v1/tasks/:id') - delete task 

const start = async (url) => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();





