const config = require('config');


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

const User = require('../../models/user');

router.post('/', (req, res) => {
    const {email, password} = req.body;

    // val

    if (!email || !password) {

        return res.status(400).json({msg: 'Please enter all fields'})

    }

    User.findOne({email}).then(user => {
        if (!user) 
            return res.status(400).json({msg: 'User does not exist'});
        


        // val password

        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) 
                return res.status(400).json({msg: 'Invalid Credentials'});
            


            jwt.sign({
                id: user.id
            }, 'secret', {
                expiresIn: 3600
            }, (err, token) => {
                if (err) 
                    throw err;
                


                res.json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    }
                })
            });
        })

    })

});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id).select('-password').then(user => res.json(user));
})

module.exports = router
