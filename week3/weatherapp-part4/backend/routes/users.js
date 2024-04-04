var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');


router.post('/signup', (req, res) =>{
    
    User.findOne({email: req.body.email, password: req.body.password}).then(data =>{
        if(!req.body.email || !req.body.password || req.body.email === " " || req.body.password === " ") {
           
                res.json({ result: false, error: 'Missing or empty fileds' });
          
        } else if (data) {
                res.json({ result: false, error: 'User already exists'})
       

        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            newUser.save().then((data)=> {
                res.json({ result: true, })

            })
        }
        
            
    })

})




module.exports = router;