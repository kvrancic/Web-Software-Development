const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    var cartAmount = 0; 
    var cart = req.session.cart || [];
    for (let i = 0; i < cart.length; i++) {
        cartAmount += cart[i].count;
    }
    res.render('cart', {
        cart: req.session.cart,
        cartAmount
    })
});

const isInCart = (cart, name) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            cart[i].count++;
            return true;
        }
    }
    return false;
};

//DODAVANJE U KOSARICU 
router.post("/add/:name", (req, res) => {
    const name = req.params.name; 
    const count = req.body.count;
    var product = {
        name: name, 
        count: count
    };
    if(req.session.cart){ //ako vec postoji kosarica u sesiji 
        var cart = req.session.cart || []; 
        if(!isInCart(cart, name)){ // u ovoj funkciji povecavamo count 
            product.count = 1; 
            cart.push(product);
        }
    }
    else{ // ako uopce ne postoji kosarica
        product.count = 1; 
        req.session.cart = [product];
        var cart = req.session.cart || []; 
    }
    return res.sendStatus(204);
});

router.post("/add/:name", (req, res) => {
    const name = req.params.name; 
    const count = req.body.count;
    var product = {
        name: name, 
        count: count
    };
    if(req.session.cart){ //ako vec postoji kosarica u sesiji 
        var cart = req.session.cart || []; 
        if(!isInCart(cart, name)){ // u ovoj funkciji povecavamo count 
            product.count = 1; 
            cart.push(product);
        }
    }
    else{ // ako uopce ne postoji kosarica
        product.count = 1; 
        req.session.cart = [product];
        var cart = req.session.cart || []; 
    }
    return res.sendStatus(204);
});

router.post('/remove/:name', (req, res) => {
    const name = req.params.name; 

    if(req.session.cart){
        const cart = req.session.cart; 
        const productIndex = (cart, name) => {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].name === name) {
                return i;
            }
            }
            return -1; // Product not found
        };
    
        const index = productIndex(cart, name); // call the function

        if (index !== -1) { // if product is found
            var product = cart[index];
    
            // Decreases count or deletes product if count becomes 0
            if (product.count > 0) {
                product.count -= 1;
            }
    
            if (product.count === 0) {
                cart.splice(index, 1); // Deletes product from cart
            }
    
            req.session.cart = cart;
        }
    }
    return res.redirect('/cart'); // refresh to see changes -> better locally with js, but more complicated 
}); 



router.get('/getAll', (req, res) => {
    const cartAmount = 0; 
    const cart = req.session.cart || [];
    for (let i = 0; i < cart.length; i++) {
        cartAmount += cart[i].count;
    }

    return res.render("cart", { // objekt koji će te koristit u cart.ejs }
        cartAmount,
        cart: req.session.cart
    });
})

module.exports = router; 




