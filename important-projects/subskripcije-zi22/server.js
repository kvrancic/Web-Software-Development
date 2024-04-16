const express = require('express');
const app = express();
var path = require('path');

const data = require('./data/data.js')
//console.log(data.types);

//import ruta 
const r = require('./routes/main-routes'); 

// middleware
app.use(express.urlencoded({ extended: false })); //
app.use(express.json());

// namjesti template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// setup statickog posluzitelja
app.use(express.static(path.join(__dirname, 'public')));

// router middleware - namještanje defaultne rute za svakog
app.use('/', r);

// dodatne rute po potrebi 
/* app.get('/',(req, res) => {
    res.send('dobroodsli'); // ovo je tako nelogicno, ali trazi zadatak
});  */

app.listen(3000, () => {console.log(`Server running on port 3000`);})