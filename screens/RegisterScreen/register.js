var Loki = require('lokijs');
var db = new Loki('db.json');
var read = require('read-file-utf8')
// var data = read(`${__dirname}/db.json`);
// var produtcs = db.getCollection('produtcs');
// db.loadJSON(data);
// window.Vue = require('vue');
// new Vue({
//   el: 'body',
//   data: {
//     produtcs: [],
//   },
//   ready: () => this.produtcs = produtcs.data,
// });

function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  const product_html = `
  <div class="form-group">
    <label>Nome Produto</label>
    <input
      id="name"
      type="user"
      class="form-control"
      placeholder="Nome Produto"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crédito/Débito</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crédito/Débito"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Dinheiro</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Dinheiro"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crachá</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crachá"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crédito/Débito Promocional</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crédito/Débito Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Dinheiro Promocional</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Dinheiro Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crachá Promocional</label>
    <input
      id="value"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crachá Promocional"
    />
  </div>
  <div class="form-group">
    <label>Qtde. Produto</label>
    <input
      id="qtdeProduct"
      type="password"
      class="form-control"
      placeholder="Qtde. Produto"
    />
  </div>
  <div class="form-actions center">
    <button
      id="Login"
      type="submit"
      class="btn btn-form btn-primary"
    >
      Salvar
    </button>
  </div>`;

  // if (document.querySelector('#product_radio').hasAttribute('checked')) {
  //   document.querySelector('#form-login').innerHTML = product_html; 
  // }

  // document.querySelector('#product_radio').addEventListener('click', (e) => {
  //   document.querySelector('#form-login').innerHTML = product_html;
  // });

  document.querySelector('#combo_radio').addEventListener('click', (e) => {
    document.querySelector('#form-login').innerHTML = ``
  })

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
    window.location = '../EditScreen/edit.html';
  });

  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../RefreshScreen/refresh.html';
  });

  // document.querySelector('#Login')
  //   .addEventListener('click', (e) => {
  //     e.preventDefault();
  //     document.querySelector('#form-login').reset();
  // });
});
