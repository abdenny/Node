// const http = require('http'); // 1 - Import Node.js core module
// //take http object and use create server method on this object.
// const server = http.createServer((request, response) => {
//     switch (request.url) {
//       case '/':
//         response.statusCode = 200;
//         response.setHeader('Content-type', 'text/plain');
//         response.end('Home Page');
//         break;
//       case '/':
//         response.statusCode = 200;
//         response.setHeader('Content-type', 'text/plain');
//         response.end('Home Page');
//         break;
//       case '/':
//         response.statusCode = 200;
//         response.setHeader('Content-type', 'text/plain');
//         response.end('Home Page');
//         break;
//     }
// //   response.statusCode = 200;
// //   response.setHeader('Content-Type', 'text/plain');
// //   response.end('HELLO WORLD');

// });
// //create channel through network card by listening on a port
// server.listen(5000, () => {
//   console.log('running on port 5000');
// });

const http = require('http');
const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Home Page');
      break;
    case '/aboutUs':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end('About us page');
      break;
    default:
      response.statusCode = 404;
      response.end('Page not found');
  }
  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain')
  // response.end("Hello World")
});
server.listen(5000, () => {
  console.log('Running on port 5000');
});
