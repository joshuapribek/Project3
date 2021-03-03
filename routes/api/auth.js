const express = require('express');
const router = express.Router();
const bcrypt= require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

router.post('/', (req, res) => {
const {  email, password } = req.body;

// val

if( !email || !password ) {

return res.status(400).json({ msg: 'Please enter all fields'})

}

User.findOne({ email })
.then(user => {
    if(!user) return res.status(400).json({ msg: 'User does not exist'});

 

//  Validate Password //
    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if(!isMatch) return res.status(400).json({ mg: 'Invalid Creds'});

          jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 }, 
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    instrument: user.instrument
                                }
                            })
                        });
                        }
                    )

    })

});














module.exports = router
