const http = require('http');

let myServer = http.createServer((request, response) => {
  ///////HERE IS WHERE ALL MY CODE GOES
  response.statusCode = 200;
  response.setHeader('Content-type', 'text/html');
  response.end('<h1>HELLO WORLD</h1>');
});

myServer.listen(3000, () => {
  console.log('listening on 3000');
});

var fs = require('fs');
fs.unlink('/tmp/hello', err => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
