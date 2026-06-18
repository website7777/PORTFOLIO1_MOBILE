const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  alert('Заявка отправлена! Это демо-форма для портфолио.');
});
