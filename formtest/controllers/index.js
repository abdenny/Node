const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  console.log(req.body);
  let firstName = req.body.FirstName;
  let lastName = req.body.Lastname;
  let email = req.body.Email;
  let phonenumber = req.body.Phonenumber;
  let password = req.body.password;
  let zip = req.body.ZipCode;
  res.send(
    `firstname: ${firstName}, lastname: ${lastName}, email:${email}, #:${phonenumber}, password: ${password}, zip: ${zip}`
  );
});

module.exports = router;
