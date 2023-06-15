const button = document.getElementById('burger');
const nav = document.getElementById('nav');

button.addEventListener('click', function() {
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('no-scroll');
});