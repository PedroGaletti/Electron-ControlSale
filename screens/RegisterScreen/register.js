function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  if (document.querySelector('#product_radio').hasAttribute('checked')) {
    document.querySelector('#form-product').style.display = 'block';
    document.querySelector('#form-combo').style.display = 'none';
    document.querySelector('#form-body').reset();
  }
  
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html';
  });

  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = './register.html';
  });

  document.querySelector('#edit').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../ListProductScreen/listProduct.html';
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
