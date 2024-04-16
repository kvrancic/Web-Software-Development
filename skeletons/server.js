const express = require('express');
const session = require('express-session') //sjednica po potrebi 
const app = express();
var path = require('path'); // path da namjestimo statike 

const data = require('./data/data.js') //uvoz podataka -> vjerojatno ovdje nepotreban


const r = require('./routes/main-routes'); //import ruta 

// middleware
app.use(express.urlencoded({ extended: false }));  //baratanje query stringom kao objektom req.body
app.use(express.json()); //obrada json-a
app.use( //setup sjednice
    session({
        secret: "goblin",
        resave: false,
        saveUninitialized: true,
    })
);


// namjesti template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// setup statickog posluzitelja
app.use(express.static(path.join(__dirname, 'public')));

// router middleware - namještanje defaultne rute za svakog
app.use('/', r);

// dodatne rute po potrebi 
/* 
app.get('/toggle/:pathArg(*)',(req, res) => {
    req.session.darkMode = !req.session.darkMode;
    console.log(req.session.darkMode);
    if(req.session.darkMode){
        return res.send(
            `
            <style>
                body{
                    background-color: black;
                    color: white;
                }
            </style>
    
            <h2>Pristupljeno putu uz toggle ${req.params.pathArg}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    } 
    else{
        return res.send(
            `
            <style>
                body{
                    background-color: white;
                    color: black;
                }
            </style>
    
            <h2>Pristupljeno putu uz toggle ${req.params.pathArg}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    }
    
})
*/

app.listen(3000, () => {console.log(`Server running on port 3000`);})