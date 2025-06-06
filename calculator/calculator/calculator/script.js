let display = document.getElementById('display');
let expression = '';

function press(num) {
  expression += num;
  display.value = expression;
}

function calculate() {
  try {
    display.value = eval(expression);
    expression = display.value;
  } catch {
    display.value = 'Erreur';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}
