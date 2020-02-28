// let something = require('./log');

// something.info('The weather is nice');

// let stringy = require('./mystring');
// console.log(stringy);

const request = require('request');
request('http://www.google.com'),
  function(error, response, body) {
    console.log(`Body: ${body}`);
  };
