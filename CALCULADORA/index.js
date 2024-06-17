function addNumber(num) {
  const result = document.querySelector("#result").value;

  document.querySelector("#result").value = result + num;
}

function clearDisplay() {
  document.querySelector("#result").value = "";
}

function calculate() {
  const result = document.querySelector("#result").value;

  document.querySelector("#result").value = eval(result);
}
