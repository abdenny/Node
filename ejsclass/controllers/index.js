const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('index page');
  let fruits = ['oranges', 'apples', 'bananas', 'kiwi', 'limes', 'Tomatoes'];
  res.render('index', {
    pageTitle: 'Vegan Cooking',
    description: 'How to make vegan recipes',
    fruitList: fruits
  });
});
module.exports = router;
