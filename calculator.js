const number1 = 5;
const number2 = 4;

function add() {
  return number1 + number2;
}

console.log(add());

if (number1 > number2) {
  console.log(number1 - number2);
}

let i;

for (i = 0; i != number1; i++) {
  console.log(i * number2);
}

function getDivide() {
  const num1 = 8,
    num2 = 3;

  function divide() {
    return num1 / num2;
  }

  return divide();
}

console.log(getDivide());
