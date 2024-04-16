const express = require("express");
const app = express();
const PORT = 3000;

// set different prooperties 
app.set('view engine', 'ejs')

//ROUTES
app.get('/', (req, res) => {
    res.render('HomePage', {
        pageTitle: 'Lol',
        welcomeMessage: 'Welcome to my store'
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
