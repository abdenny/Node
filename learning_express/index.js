// const express = require('express');

// const app = express();
// //Creating a handler
// app.get('/', (request, response) => {
//   console.log(request);
//   response.send('hello world');
// });
// app.get('/about', (req, res) => {
//   res.send('about us');
// });
// app.listen(3000, () => {
//   console.log('Running on port 3000');
// });

const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('home page');
});
app.get('/about', (req, res) => {
  res.send('about page');
});
app.get('/faq', (req, res) => {
  res.send('frequently asked questions');
});
app.post('/faq', (req, res) => {
  res.send('frequently asked questions');
});
app.get('/pictures?', (req, res) => {
  res.send('pictures');
});
app.get('/cats?(fancy)?', (req, res) => {
  res.send('my cats are fancy');
});
// app.get('*', (req, res) => {
//     res.send('here are my doggies')
// })
// app.get('/contact', (req, res) => {
//     let contact = req.param('name');
//     console.log(contact);
//     let myString  = "contact " + contact;
//     res.send(`contact ${contact}`)
// })
app.get('/contact', (req, res) => {
  let name = req.param('name');
  res.send(`Add your name to the url`);
});
app.get('/contact/:name', (req, res) => {
  let name = req.param('name');
  res.send(`your name is: ${name}`);
});
app.get('/calculate/:a/:b', (req, res) => {
  let a = req.param('a');
  let b = req.param('b');
  let c = parseInt(a) + parseInt(b);
  res.send(`<h1 style="color:green">The sum of ${a} + ${b} =  ${c}</h1>`);
});
app.get('/pics', (req, res) => {
  let imgVar1 = req.param('img1');
  let imgVar2 = req.param('img2');
  let imgVar3 = req.param('img3');
  let imgVar4 = req.param('img4');
  res.send(`
    <h1>My Images</h1>
    <img src='${imgVar1}' />
    <img src='${imgVar2}' />
    <img src='${imgVar3}' />
    <img src='${imgVar4}' />
    `);
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});
