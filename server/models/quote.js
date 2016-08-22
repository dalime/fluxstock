const mongoose = require('mongoose');
const request = require('request');

const getQuotes = function(cb) {
  request('http://dev.markitondemand.com/Api/v2/Lookup?input=NFLX', (err, res, body) => {
    if (err) cb(err);
    let test = body;
    cb(null, body);
  })
}

module.exports = getQuotes;
