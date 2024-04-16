//imports 
require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose'); 
const session = require('express-session'); 
const path = require('path');

const app = express(); 
const PORT = process.env.port || 8080; 

// database connection 
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology: true});
const db = mongoose.connection; 
db.on('error', (error) => {
    console.log(error);
}) 
db.once('open', () => console.log('Connected to the database!'));

//middlewares
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(session({
    secret: "osmijeh franje tudmana",
    saveUninitialized: true, 
    resave: false,
})
); 
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message; 
    next(); 
})

// set template engine 
app.set('view engine', 'ejs'); 

// lociraj staticne stvari 
app.use(express.static(path.join(__dirname, 'public')));

// route prefix 
app.use("", require('./routes/routes'));

app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});