const h1 = document.querySelector('h1');
const inputs = document.querySelectorAll('input');
const usernameInput = inputs[0];
const passwordInput = inputs[1];
const loginButton = document.querySelectorAll('button')[0];
const signUpButton = document.querySelectorAll('button')[1];
console.log('button', loginButton);

loginButton.addEventListener('click', function(event) {
    console.log(usernameInput.value);

    h1.innerHTML = usernameInput.value;
});
signUpButton.addEventListener('click', function() {
  
    h1.innerHTML = 'Not Logged In'
})