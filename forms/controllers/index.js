const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let isValid = req.body.isValid;
  let isTrue = req.body.isTrue;
  let password = req.body.password;
  res.send(
    `email:${email}, is valid:${isValid}, is true: ${isTrue}, password: ${password}`
  );
});

module.exports = router;
