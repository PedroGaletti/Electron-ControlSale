var Loki = require('lokijs');
var db = new Loki('db.json');
var read = require('read-file-utf8')
var data = read(`${__dirname}/db.json`);
var produtcs = db.getCollection('produtcs');
db.loadJSON(data);
window.Vue = require('vue');
new Vue({
  el: 'body',
  data: {
    produtcs: [],
  },
  ready: () => this.produtcs = produtcs.data,
});

function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `${__dirname}/screens/index.html`;
  });

  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `${__dirname}/screens/register.html`;
  });

  document.querySelector('#edit').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `${__dirname}/screens/edit.html`;
  });

  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `${__dirname}/screens/refresh.html`;
  });

  document.querySelector('#Login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#form-login').reset();
  });
});
