const express = require('express'); 
const router = express.Router(); 
const User = require('../models/users.js'); 

// inseraj usera u databasu 
router.post('/add', (req, res) => {
    const user = new User({
        name : req.body.name, 
        email: req.body.email, 
        phone: req.body.phone, 
    }); 
    user.save()
    .then(() => {
        req.session.message = {
            type: 'success',
            message: 'User added successfully'
        };
        res.redirect('/');
    })
    .catch((err) => res.json({message: err.message, type: 'danger'}));
})


// update user route 
router.post('/update/:id', (req, res) => {
    let id = req.params.id; 

    User.findByIdAndUpdate(id,
        {
            name : req.body.name, 
            email: req.body.email, 
            phone: req.body.phone
        })
        .then(res => {
            res.session.message = {
                type: "success",
                message: "User updated successfully",
            }
            res.redirect('/');
        }).catch(err => res.json({message: err.message, type: 'danger', lik: "peder"}));
    });

// get all users route
router.get('/', (req, res) => {
    User.find().exec()
    .then((users) => {
        res.render('index', {
            title: 'Homepage',
            users: users
        });
    })
    .catch((err) => {
        console.log("ovdje neki error");
        res.json({message: err.message})});
}); 

router.get('/add', (req, res) => {
    res.render('add_users', {title: 'Add users'})
})

router.get('/update/:userid', (req, res) => {
    const {userid} = req.params;
    User.findById(userid)
    .then((user) => {
        res.render('edit_users', {
            user: user,
            title: "Editiranje usera"
        });
    })
    .catch((err) => {
        console.log("ovdje neki error");
        res.json({message: err.message})});
})

 


module.exports = router;