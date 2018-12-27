var Loki = require('lokijs');
var db = new Loki('db.json');
var read = require('read-file-utf8')
// var data = read(`${__dirname}/db.json`);
// var users = db.getCollection('users');
// db.loadJSON(data);
// window.Vue = require('vue');
// new Vue({
//   el: 'body',
//   data: {
//     users: [],
//   },
//   ready: () => this.users = users.data,
// });

function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  const url  = window.location.href;
  const index = (url.indexOf('=') + 1);
  const screenToGo = url.substr(index);

  document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `../index.html`;
  });

  document.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `./auth.html`;
  });

  document.querySelector('#edit').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `./auth.html`;
  });

  document.querySelector('#refresh').addEventListener('click', (e) => {
    e.preventDefault();
    window.location = `./auth.html`;
  });

  document.querySelector('#Login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      let data = {
        user: document.querySelector('#user').value,
        password: document.querySelector('#password').value,
      };
      document.querySelector('#form-login').reset();
      window.location = `../${screenToGo}`;
  });
});
