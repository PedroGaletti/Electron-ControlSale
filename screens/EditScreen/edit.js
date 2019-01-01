function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  var plus = document.getElementsByClassName("plus-li");
  var minus = document.getElementsByClassName("minus-li");
  var i, j;
  for (i = 0; i < plus.length; i++) {
    plus[i].onclick = function() {
      this.classList.add('minus-li');
      this.classList.remove('plus-li');
      this.lastChild.classList.remove('icon-plus');
      this.lastChild.classList.add('icon-minus');
      document.querySelector('#product_combos').appendChild(this);
    };
  }

  for (j = 0; j < minus.length; j++) {
    minus[j].onclick = function() {
      this.classList.add('plus-li');
      this.classList.remove('minus-li');
      this.lastChild.classList.remove('icon-minus');
      this.lastChild.classList.add('icon-plus');
      document.querySelector('#products').appendChild(this);
    };
  }

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
});
