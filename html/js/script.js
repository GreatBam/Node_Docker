const signinToggler = document.getElementById('signin-toggler');
const signupToggler = document.getElementById('signup-toggler');
const sigininContainer = document.querySelector('.signin-container');
const siginupContainer = document.querySelector('.signup-container');

siginupContainer.style.display = 'none';

signinToggler.onclick = () => {
  console.log('clicked in');
    sigininContainer.style.display = 'block';
    siginupContainer.style.display = 'none';
}

signupToggler.onclick = () => {
  console.log('clicked up');
    sigininContainer.style.display = 'none';
    siginupContainer.style.display = 'block';
}
