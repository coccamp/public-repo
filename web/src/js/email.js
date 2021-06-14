(function () {
  emailjs.init('user_S1T4ayPRIqaBYmZRRV7gX');
})();

window.onload = function () {
  const form = document.querySelector('#contact-form');
  const loader = document.querySelector('#loader');
  const loading = document.querySelector('#loading');
  const success = document.querySelector('#contact-success');
  const failure = document.querySelector('#contact-error');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = form.offsetHeight;
    hide(form);

    loader.style.height = `${height}px`;
    show(loader);

    show(loading);

    emailjs.sendForm('service_ysn9wlr', 'template_ajaeepm', this).then(
      function () {
        hide(loading);
        loader.style.height = 'auto';
        show(success);
      },
      function (error) {
        hide(loading);
        loader.style.height = 'auto';
        show(failure);
        console.log('FAILED...', error);
      }
    );
  });
};

const show = (element) => {
  element.classList.remove('hidden');
};

const hide = (element) => {
  element.classList.add('hidden');
};
