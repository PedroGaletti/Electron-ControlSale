function ready(fn) {
  if (document.readyState != 'loading') {
    return fn();
  }
  return document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  const SimpleMaskMoney = require('../../node_modules/simple-mask-money/lib/simple-mask-money.js');

  let value_card = document.querySelector('#value_card');
  let value_card_product = document.querySelector('#value_card_product');
  let value_money = document.querySelector('#value_money');
  let value_money_product = document.querySelector('#value_money_product');
  let value_cracha = document.querySelector('#value_cracha')
  let value_cracha_product = document.querySelector('#value_cracha_product');
  let value_card_promo = document.querySelector('#value_card_promo')
  let value_card_promo_product = document.querySelector('#value_card_promo_product');
  let value_money_promo = document.querySelector('#value_money_promo')
  let value_money_promo_product = document.querySelector('#value_money_promo_product');
  let value_cracha_promo = document.querySelector('#value_cracha_promo')
  let value_cracha_promo_product = document.querySelector('#value_cracha_promo_product');

  SimpleMaskMoney.args = {
    allowNegative: false,
    negativeSignAfter: false,
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'move'
  };

  console.log(value_card_product);

  value_card.oninput = () => value_card.value = SimpleMaskMoney.format(value_card.value);
  value_card_product.oninput = () => value_card_product.value = SimpleMaskMoney.format(value_card_product.value);
  value_money.oninput = () => value_money.value = SimpleMaskMoney.format(value_money.value);
  value_money_product.oninput = () => value_money_product.value = SimpleMaskMoney.format(value_money_product.value);
  value_cracha.oninput = () => value_cracha.value = SimpleMaskMoney.format(value_cracha.value);
  value_cracha_product.oninput = () => value_cracha_product.value = SimpleMaskMoney.format(value_cracha_product.value);
  value_card_promo.oninput = () => value_card_promo.value = SimpleMaskMoney.format(value_card_promo.value);
  value_card_promo_product.oninput = () => value_card_promo_product.value = SimpleMaskMoney.format(value_card_promo_product.value);
  value_money_promo.oninput = () => value_money_promo.value = SimpleMaskMoney.format(value_money_promo.value);
  value_money_promo_product.oninput = () => value_money_promo_product.value = SimpleMaskMoney.format(value_money_promo_product.value);
  value_cracha_promo.oninput = () => value_cracha_promo.value = SimpleMaskMoney.format(value_cracha_promo.value);
  value_cracha_promo_product.oninput = () => value_cracha_promo_product.value = SimpleMaskMoney.format(value_cracha_promo_product.value);

  value_card.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_card.value);
  }
  value_card_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_card_product.value);
  }
  value_money.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_money.value);
  }
  value_money_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_money_product.value);
  }
  value_cracha.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha.value);
  }
  value_cracha_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_card_promo.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_card_promo_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_money_promo.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_money_promo_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_cracha_promo.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
  }
  value_cracha_promo_product.onkeyup = (e) => {
    if (e.key !== "Enter") return;
    SimpleMaskMoney.formatToNumber(value_cracha_product.value);
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
