var express = require('express');
var router = express.Router();
const userDB = require('../database/db.json')
const fs = require('fs')
const bcrypt = require('bcrypt')
const generateJWT = require('../utils/jwt')

/** login */



// {
//     "username":" username@mail.com",
//     "password": "password"
// }

router.post('/', async (req,res) => {
   
    const {username, password} = req.body
    const databaseUser = userDB.find(user =>user.username == username)
    if(!databaseUser){
       return res.sendStatus(401);
    }
    const isAuthorized = await bcrypt.compare(password, databaseUser.password)
    if(!isAuthorized){
        return res.sendStatus(401)
    }

    /** JWT */
    const token = generateJWT(username)
    res.send(token)

    res.sendStatus(501)
})


module.exports = router