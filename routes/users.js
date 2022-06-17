const { application } = require('express');
var express = require('express');
var router = express.Router();
const userDB = require('../database/db.json')
const bcrypt = require('bcrypt')
const fs = require('fs')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userDB);
});

// {
// "username":" username@mail.com",
// "password": "password",
// " name": "name"
// }

router.post('/', async (req,res) =>  {
  const {username, password, name} = req.body
  const newUser = {
    username :username,
    name: name,
    password: undefined
  }
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)
newUser.password = hashedPassword
userDB.push(newUser)

await fs.writeFileSync('./database/db.json', JSON.stringify(userDB));})


// authorization login



module.exports = router;
