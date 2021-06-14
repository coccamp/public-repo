const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const nav = document.querySelector('#nav');

btnOpen.addEventListener('click', () => {
  nav.classList.add('nav--open');
});

btnClose.addEventListener('click', () => {
  nav.classList.remove('nav--open');
});
