const $ = document.querySelector.bind(document);
const globalInputA = $('#inputA');
const globalInputB = $('#inputB');

function start() {
  globalInputA.addEventListener('input', handleChangeInputA);
  globalInputB.addEventListener('input', handleChangeInputB);
}

function handleChangeInputA() {
  calculate();
}

function handleChangeInputB() {
  calculate();
}

function calculate() {
  console.log('calculate');
}

start();
