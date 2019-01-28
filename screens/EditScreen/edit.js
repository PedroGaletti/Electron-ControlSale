function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  document.querySelector('#form').style.display = 'block';
  document.querySelector('#stoque').style.display = 'none';
  
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html';
  });
  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../RegisterScreen/register.html';
  });
  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../RefreshScreen/refresh.html';
  });

  document.querySelector('#sales').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../sales.html';
  });
});
