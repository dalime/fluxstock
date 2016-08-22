const express = require('express');
const router = express.Router();

const Quote = require('../models/quote');

router.route('/')
  .get((req, res) => {
    Quote.find({}, (err, quotes) => {
      res.status(err ? 400 : 200).send(err || quotes);
    });
  })

module.exports = router;
