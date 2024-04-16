const express = require('express');
const session = require('express-session') //sjednica po potrebi 
const app = express();
var path = require('path'); // path da namjestimo statike 

const mr = require('./routes/main-routes'); //import ruta 
const cr = require('./routes/cart-routes')

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
app.use('/', mr);
app.use('/cart', cr);


app.listen(8080, () => {console.log(`Server running on port 8080`);})