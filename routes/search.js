const express = require('express');
const router = express.Router();
const {search} = require('../controller/search'); 

router.post('/', search );  

module.exports = router;