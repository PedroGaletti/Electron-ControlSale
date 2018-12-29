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
      this.lastChild.classList.add('icon-minus')
      document.querySelector('#product_combos').appendChild(this);
    };
  }

  for (j = 0; j < minus.length - 1; j++) {
    minus[i].onclick = function() {
      this.classList.add('plus-li');
      this.classList.remove('minus-li');
      this.lastChild.classList.remove('icon-minus');
      this.lastChild.classList.add('icon-plus');
      document.querySelector('#products').appendChild(this);
    };
  }
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
      id="value_card"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crédito/Débito"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Dinheiro</label>
    <input
      id="value_money"
      type="password"
      class="form-control"
      placeholder="Valor Produto Dinheiro"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crachá</label>
    <input
      id="value_cracha"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crachá"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crédito/Débito Promocional</label>
    <input
      id="value_card_promo"
      type="password"
      class="form-control"
      placeholder="Valor Produto Crédito/Débito Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Dinheiro Promocional</label>
    <input
      id="value_money_promo"
      type="password"
      class="form-control"
      placeholder="Valor Produto Dinheiro Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Produto Crachá Promocional</label>
    <input
      id="value_cracha_promo"
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

  const combo_html = `
    <div class="form-group">
    <label>Produtos Cadastrados</label>
    <ul id="products">
      <li>Hit the gym</li>
      <li>Pay bills</li>
      <li>Meet George</li>
    </ul>
  </div>
  <div class="form-group">
    <label>Produtos do Combo</label>
    <ul id="product_combos">
      <li>Pay bills</li>
      <li>Meet George</li>
    </ul>
  </div>
  <div class="form-group">
    <label>Valor Combo Crédito/Débito</label>
    <input
      id="value_card"
      type="number"
      class="form-control"
      placeholder="Valor Combo Crédito/Débito"
    />
  </div>
  <div class="form-group">
    <label>Valor Combo Dinheiro</label>
    <input
      id="value_money"
      type="number"
      class="form-control"
      placeholder="Valor Combo Dinheiro"
    />
  </div>
  <div class="form-group">
    <label>Valor Combo Crachá</label>
    <input
      id="value_cracha"
      type="number"
      class="form-control"
      placeholder="Valor Combo Crachá"
    />
  </div>
  <div class="form-group">
    <label>Valor Combo Crédito/Débito Promocional</label>
    <input
      id="value_card_promo"
      type="number"
      class="form-control"
      placeholder="Valor Combo Crédito/Débito Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Combo Dinheiro Promocional</label>
    <input
      id="value_money_promo"
      type="number"
      class="form-control"
      placeholder="Valor Combo Dinheiro Promocional"
    />
  </div>
  <div class="form-group">
    <label>Valor Combo Crachá Promocional</label>
    <input
      id="value_cracha_promo"
      type="number"
      class="form-control"
      placeholder="Valor Combo Crachá Promocional"
    />
  </div>
  <div class="form-group">
    <label>Qtde. Combo</label>
    <input
      id="qtdeProduct"
      type="number"
      class="form-control"
      placeholder="Qtde. Combo"
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
  </div>
  `;

  // if (document.querySelector('#product_radio').hasAttribute('checked')) {
  //   document.querySelector('#form-login').innerHTML = product_html; 
  // }

  // document.querySelector('#product_radio').addEventListener('click', (e) => {
  //   document.querySelector('#form-login').innerHTML = product_html;
  // });

  // document.querySelector('#combo_radio').addEventListener('click', (e) => {
  //   document.querySelector('#form-login').innerHTML = combo_html;
  // })

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
});
