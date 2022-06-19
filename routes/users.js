const { application } = require('express');
var express = require('express');
var router = express.Router();
const userDB = require('../database/db.json')
const bcrypt = require('bcrypt')
const fs = require('fs')
const authorization = require('../utils/authotization.js')
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
    password: undefined,
    created: Date.now(),
    updated: Date.now()
  }

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)
newUser.password = hashedPassword
if(!newUser){
  res.sendStatus(401)
}else{
  
userDB.push(newUser)

}
await fs.writeFileSync('./database/db.json', JSON.stringify(userDB));

})

/** update user info */
router.put('/', authorization,(req,res) => {

})


// authorization login



module.exports = router;
