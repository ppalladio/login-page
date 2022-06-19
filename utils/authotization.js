const { request } = require('express');
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const autorize = (req, res, next) => {
    res.sendStatus(401)
    next()
} 



module.exports = autorize