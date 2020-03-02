const express = require('express');
const app = express();
app.use(require('./controllers/index'));
app.use(require('./controllers/aboutus'));
app.use(require('./controllers/schools'));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, () => {
  console.log('listening on 3000');
});
