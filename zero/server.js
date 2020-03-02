const express = require('express');
const app = express();
///Middleware works similar to promises
// we use app.use with req, res, next>>> It wont move forward until next()
app.use((req, res, next) => {
  console.log('Hello');
  next();
});

app.get('/', (req, res) => {
  let user = {
    name: 'sally',
    hobby: 'soccer'
  };
  res.send(user);
});
app.listen(8000);
