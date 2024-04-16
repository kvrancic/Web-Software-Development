// import modula
const express = require('express'); 
const session = require('express-session');
const ejs = require('ejs'); 
const path = require('path');
const data = require('./data/data.js')
//import ruta 
const cr = require('./routes/cart.routes'); 
const hr = require('./routes/home.routes'); 

// inicijalizacija expressa 
const app = express(); 

// middleware
app.use(express.urlencoded({ extended: false })); //
app.use(express.json());
app.use(
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
app.use('/home', hr);
app.use('/cart', cr);

// dodatne rute po potrebi 
app.get('/',(req, res) => {
    res.redirect('/home/getCategories'); // ovo je tako nelogicno, ali trazi zadatak
});
app.get('/home/getProducts/cart.ejs', (req, res) => {
    res.redirect('/cart');
});
app.get('/home/getCategories/cart.ejs', (req, res) => {
    res.redirect('/cart');
});
app.get('/home/cart', (req, res) => {
    res.redirect('/cart');
});

app.listen(3000, () => {console.log(`Server running on port 3000`);})



