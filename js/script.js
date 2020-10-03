const $ = document.querySelector.bind(document);
const globalInputA = $('#inputA');
const globalInputB = $('#inputB');
const globalDivCalculation = $('#calculations');

function start() {
  globalInputA.addEventListener('input', handleChangeInputA);
  globalInputB.addEventListener('input', handleChangeInputB);
  calculate();
}

function handleChangeInputA() {
  calculate();
}

function handleChangeInputB() {
  calculate();
}

function calculate() {
  const a = parseInt(globalInputA.value, 10);
  const b = parseInt(globalInputB.value, 10);

  const innerCalculation = document.createElement('div');
  innerCalculation.classList.add('row');

  for (let i = 0; i < 12; i++) {
    let id = 'id' + i;
    let value = 'value-' + i;
    let description = 'description ' + i;

    const divElement = createElementDiv();
    const inputElement = createElementInput(id, value);
    const labelElement = createElementLabel(id, description);

    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
    innerCalculation.appendChild(divElement);
  }

  globalDivCalculation.innerHTML = '';
  globalDivCalculation.appendChild(innerCalculation);
}

function createElementDiv() {
  let div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

  return div;
}

function createElementInput(id, value) {
  let input = document.createElement('input');
  input.readOnly = true;
  input.type = 'text';
  input.id = id;
  input.value = value;

  return input;
}

function createElementLabel(id, description) {
  let label = document.createElement('label');
  label.for = id;
  label.textContent = description;
  label.classList.add('active');

  return label;
}

start();
