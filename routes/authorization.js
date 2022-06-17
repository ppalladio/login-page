var express = require('express');
var router = express.Router();
const userDB = require('../database/db.json')

/** login */

router.post('/', (req,res) => {
 res.sendStatus(404);
})


module.exports = router