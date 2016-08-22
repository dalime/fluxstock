const express = require('express');
const router = express.Router();

router.use('/quotes', require('./quotes'));

module.exports = router;
