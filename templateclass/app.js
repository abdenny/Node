const express = require('express');
const app = express();
let PORT = 3000;
//middleware

app.use(require('./routes/homepage'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/cars'));
app.use(require('./routes/animals'));
/////refactored routes into modules folders
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });
// app.get('/aboutUs', (req, res) => {
//   res.send('about us');
// });
// app.get('/cars/:cars', (req, res) => {
//   let cars = req.param('cars');
//   res.send(`${cars} Cars`);
// });
// app.get('/animals', (req, res) => {
//   res.send('Animals');
// });
app.listen(PORT, () => {
  console.log('listening on port 3000');
});
