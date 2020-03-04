let button = document.getElementById('myButton');
let form = document.querySelector('form');

button.addEventListener('click', e => {
  alert('we clicked a button');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let email = document.getElementById('email');
  let isTrue = document.getElementById('isTrue');
  let isValid = document.getElementById('isValid');
  let password = document.getElementById('password');
  console.log(e);
  console.log(email.value);
  console.log(isTrue.value);
  console.log(isValid.value);
  console.log(password.value);
  fetch('/', {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: {
      email: email.value,
      isTrue: isTrue.value,
      isValid: isValid.value,
      password: password.value
    }
  })
    .then(response => {
      let message = document.getElementById('message');
      message.textContent = 'Your Form Was Submitted';
    })
    .catch(() => {
      let message = document.getElementById('message');
      message.textContent = 'There was an error submitting your form';
    });
});
