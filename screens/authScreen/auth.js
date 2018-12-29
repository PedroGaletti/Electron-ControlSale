function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../index.html`;
  });
});
