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
  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../screens/index.html`;
  });

  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../screens/authScreen/auth.html?screen=RegisterScreen/register.html`;
    console.log(window.location);
  });

  document.querySelector('#edit').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../screens/authScreen/auth.html?screen=EditScreen/edit.html`;
  });

  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../screens/authScreen/auth.html?screen=RefreshScreen/refresh.html`;
  });
});
