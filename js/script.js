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
  const numberA = parseInt(globalInputA.value, 10);
  const numberB = parseInt(globalInputB.value, 10);

  const innerCalculation = document.createElement('div');
  innerCalculation.classList.add('row');

  globalCalculations.forEach(function (calculation) {
    let id = 'input_' + calculation.id;
    let description = calculation.description;
    let value = getCalculationsFrom(
      calculation.type,
      calculation.calculationFunction,
      numberA,
      numberB
    );

    innerCalculation.appendChild(
      createElementCalculate(id, value, description)
    );
  });

  globalDivCalculation.innerHTML = '';
  globalDivCalculation.appendChild(innerCalculation);
}

function createElementCalculate(id, value, description) {
  let div = createElementDiv();
  let input = createElementInput(id, value);
  let label = createElementLabel(id, description);
  div.appendChild(input);
  div.appendChild(label);

  return div;
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
  if (number > 21) {
    return '0';
  }

  if (isNaN(number)) {
    return 'NaN';
  }

  if (number === 0) {
    return 1;
  }

  return number * getFactorialFrom(number - 1);
}

function getCalculationsFrom(type, calculationFunction, a, b) {
  switch (type) {
    case 'a':
      return calculationFunction(a);
    case 'b':
      return calculationFunction(b);
    case 'a_b':
      return calculationFunction(a, b);
    case 'b_a':
      return calculationFunction(b, a);
    default:
      return 'Não definido';
  }
}

start();
