const express = require('express');
const router = express.Router();

//router.use('/quotes', require('./quotes'));
router.use('/lookups', require('./lookups'));

module.exports = router;
