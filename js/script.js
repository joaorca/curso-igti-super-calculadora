const globalCalculations = [
  {
    id: 1,
    description: 'Soma (a + b)',
    calculationFunction: (a, b) => formatNumber(a + b),
    type: 'a_b',
  },
  {
    id: 2,
    description: 'Subtração (a - b)',
    calculationFunction: (a, b) => formatNumber(a - b),
    type: 'a_b',
  },
  {
    id: 3,
    description: 'Subtração (b - a)',
    calculationFunction: (b, a) => formatNumber(b - a),
    type: 'b_a',
  },
  {
    id: 4,
    description: 'Multipicação (a * b)',
    calculationFunction: (a, b) => formatNumber(a * b),
    type: 'a_b',
  },
  {
    id: 5,
    description: 'Divisão (a / b)',
    calculationFunction: (a, b) => formatNumber(getDivisionFrom(a, b)),
    type: 'a_b',
  },
  {
    id: 6,
    description: 'Divisão (b / a)',
    calculationFunction: (b, a) => formatNumber(getDivisionFrom(b, a)),
    type: 'b_a',
  },
  {
    id: 7,
    description: 'Quadrado de a (a²)',
    calculationFunction: (a) => formatNumber(a ** 2),
    type: 'a',
  },
  {
    id: 8,
    description: 'Quadrado de b (b²)',
    calculationFunction: (b) => formatNumber(b ** 2),
    type: 'b',
  },
  {
    id: 9,
    description: 'Divisores inteiros de a',
    calculationFunction: (a) => getDivisorsFrom(a),
    type: 'a',
  },
  {
    id: 10,
    description: 'Divisores inteiros de b',
    calculationFunction: (b) => getDivisorsFrom(b),
    type: 'b',
  },
  {
    id: 11,
    description: 'Fatorial de a (a)',
    calculationFunction: (a) => formatNumber(getFactorialFrom(a)),
    type: 'a',
  },
  {
    id: 12,
    description: 'Fatorial de b (b)',
    calculationFunction: (b) => formatNumber(getFactorialFrom(b)),
    type: 'b',
  },
];

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

  globalCalculations.forEach(function (calculation) {
    let id = calculation.id;
    let value = calculation.id;
    let description = calculation.description;

    const divElement = createElementDiv();
    const inputElement = createElementInput(id, value);
    const labelElement = createElementLabel(id, description);

    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
    innerCalculation.appendChild(divElement);
  });

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

function formatNumber(number) {
  return new Intl.NumberFormat('pt-br').format(number);
}

function getDivisionFrom(number1, number2) {
  if (number2 === 0) {
    return 'Divison by 0';
  }

  return number1 / number2;
}

function getDivisorsFrom(number) {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.join(', ') + ' (' + divisors.length + ')';
}

function getFactorialFrom(number) {
  if (isNaN(number)) {
    return 'NaN';
  }

  if (number === 0) {
    return 1;
  }

  if (number > 21) {
    return 'Too large';
  }

  return number * getFactorialFrom(number - 1);
}

start();
