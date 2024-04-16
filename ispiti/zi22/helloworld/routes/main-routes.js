const express = require('express'); 
const router = express.Router();

const data = require('../data/data.js');
const accounts = require('../data/accounts.js');

// osnovna ruta
router.get('/',(req, res) => {
    //console.log(data.types);
    res.render('index', {
        types: data.types
    });
})

// get ruta za formu u nekoj kategoriji 
router.get('/subscribe/:categoryid', (req, res) => {
    const category = req.params.categoryid; 
    console.log('category is ' + category);
    const type = data.types.find(({typeName}) => typeName === category);
    if (!type) {
        // Handle the case when the type is not found. Maybe redirect to an error page or the homepage.
        console.log('Type not found!');
        return res.redirect('/');
    }
    res.render('subscription', {
        type: type.typeName
    });
});


// post ruta za submitati formu 
router.post('/subscribe/:categoryid', (req, res) =>{
    const category = req.params.categoryid; 
    const {nickname, email} = req.body;
    if(accounts.find(({nickname: xime, email: xmail, type: xtype}) => 
        (xime === nickname && xmail === email && xtype === category)
    )){
        return res.send('<h1>ZAUZETO</h1>').redirect('/');
    } else{
        console.log('ne postoji');
        accounts.push({
            nickname: nickname, 
            email: email, 
            type: category
        })
        console.log(accounts);
        data.types.find(x => x.typeName === category).noOfSubs++;
        console.log(data.types.find(x => x.typeName === category).noOfSubs);
        console.log('Pretplata uspjesno dodana');
        return res.redirect('/'); 
    }
});

module.exports = router; 