import "./styles.css";
var input = document.getElementsByClassName("input");
var display = document.getElementById("mid");

var operand1 = 0;
var operand2 = null;
var sym = null;
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value === "+") {
      operand1 = parseFloat(display.textContent);
      display.innerText = " ";
      sym = "+";
    } else if (value === "-") {
      operand1 = parseFloat(display.textContent);
      display.innerText = " ";
      sym = "-";
    } else if (value === "/") {
      operand1 = parseFloat(display.textContent);
      display.innerText = " ";
      sym = "/";
    } else if (value === "*") {
      operand1 = parseFloat(display.textContent);
      display.innerText = " ";
      sym = "*";
    } else if (value === "%") {
      operand1 = parseFloat(display.textContent);
      display.innerText = " ";
      sym = "%";
    } else if (value === "=") {
      operand2 = parseFloat(display.textContent);
      var text;
      if (sym === "+") {
        text = operand1 + operand2;
      } else if (sym === "-") {
        text = operand1 - operand2;
      } else if (sym === "/") {
        text = operand1 / operand2;
      } else if (sym === "*") {
        text = operand1 * operand2;
      } else if (sym === "%") {
        text = operand1 % operand2;
      }
      display.innerText = text;
    } else if (value === "AC") {
      operand1 = " ";
      operand2 = " ";
      display.innerText = " ";
    } else if (value === "+/-") {
      operand1 = parseFloat(display.textContent);
      if (operand1 > 0) {
        display.innerText = "-" + operand1;
      }
      if (operand1 < 0) {
        display.innerText = "-1" * operand1;
      }
    } else {
      if (value !== "-") {
        display.innerText += value;
      }
    }
  });
}
