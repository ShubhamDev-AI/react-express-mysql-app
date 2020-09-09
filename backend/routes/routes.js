const express = require('express');
const router = express.Router();

// import controller
const { dbconn } = require('../controller/controllers');


router.post('/db',dbconn);
module.exports = router;