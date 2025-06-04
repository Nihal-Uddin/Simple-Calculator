let screen = "";
let output = 0;
let result = "";
let num1 = 0;
let num = 0;
let sign = "";
let flag = 0;
let round = 0;
let mark = 0;

function input(n) {
  if (n >= 0 && n <= 9) {
    s(n);
    result = result + n;
    num1 = parseInt(result);
  } else if (n == "+") {
    formula();
    s(n);
    flag = 1;
    if (round == 0) {
      num = num1;
      round = 1;
    } else {
      num = output;
    }
    result = "";
    sign = "+";
  } else if (n == "-") {
    formula();
    s(n);
    flag = 1;
    if (round == 0) {
      num = num1;
      round = 1;
    } else {
      num = output;
    }
    result = "";
    sign = "-";
  } else if (n == "*") {
    formula();
    s(n);
    flag = 1;
    if (round == 0) {
      num = num1;
      round = 1;
    } else {
      num = output;
    }
    result = "";
    sign = "*";
  } else if (n == "/") {
    formula();
    s(n);
    flag = 1;
    if (round == 0) {
      num = num1;
      round = 1;
    } else {
      num = output;
    }
    result = "";
    sign = "/";
  } else if (n == "c") {
    screen = "";
    output = 0;
    result = "";
    num1 = 0;
    num = 0;
    sign = "";
    flag = 0;
    round = 0;
    mark = 0;
    document.getElementById("display").innerText = screen;
  }
  else if( n=="=")
  {
    formula();
    document.getElementById("answer").innerText=output;
  }
}

function calculate(sign, num1, num2) {
  if (sign == "+") {
    return num1 + num2;
  } else if (sign == "-") {
    return num1 - num2;
  } else if (sign == "*") {
    return num1 * num2;
  } else if (sign == "/") return num1 / num2;
}

function s(n) {
  screen = screen + n;
  document.getElementById("display").innerText = screen;
}
function formula() {
  if (flag == 1) {
    output = calculate(sign, num, num1);
    flag = 0;
  }
}
