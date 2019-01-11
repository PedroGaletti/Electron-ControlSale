function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html';
  });
  
  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../RegisterScreen/register.html';
  });
  
  document.querySelector('#edit').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../ListProductScreen/listProduct.html';
  });
  
  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = './refresh.html';
  });
});
