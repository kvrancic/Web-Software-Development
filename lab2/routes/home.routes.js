const express = require('express'); 
const router = express.Router();

const data = require('../data/data.js')


router.get('/',(req, res) => {
    res.redirect('/home/getCategories');
})


// ova ruta doslovno nema smisla, ali traži se u zadatku 
router.get('/getCategories', (req, res) => {
    var cartAmount = 0; //refresha se na 0 kad ponovno odem na back
    var cart = req.session.cart || [];
    for (let i = 0; i < cart.length; i++) {
        cartAmount += cart[i].count;
    }
    //console.log(cartAmount);

    return res.render('home', {
        cartAmount, 
        session: req.session, 
        categories: data.categories, 
        products:[],
        currentCategory: 0,
        cartMap: getCartMap(req.session.cart)
    });
});

router.get('/getProducts/:name', (req, res) => {
    var cartAmount = 0; //refresha se na 0 kad ponovno odem na back
    var cart = req.session.cart || [];
    for (let i = 0; i < cart.length; i++) {
        cartAmount += cart[i].count;
    }
    //console.log(cartAmount);

    return res.render('home', {
        cartAmount, 
        session: req.session, 
        categories: data.categories, 
        products: data.categories.find((y) => y.name === req.params.name).products,
        currentCategory: req.params.name.toUpperCase(),
        cartMap: getCartMap(req.session.cart ? req.session.cart : [])
    });
})

function getCartMap(cart) {
    if (!Array.isArray(cart)) {
        cart = [];
    }
    const cartMap = {};
    cart.forEach(item => {
        cartMap[item.name] = item.count;
    });
    return cartMap;
}


module.exports = router; 