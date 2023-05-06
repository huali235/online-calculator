"use strict";

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".calc");
const clear = document.querySelector(".clear");
const posNeg = document.querySelector(".pos-neg");
const percentage = document.querySelector(".percentage");
const equals = document.querySelector(".equals");
const operationString = document.querySelector(".operation-string");
const total = document.querySelector(".total");
let numValue = "";
let num1 = "";

/// Functions

const init = function () {
  total.textContent = "";
  operationString.textContent = "";
};

const displayNum = function () {
  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      numValue = "";
      numValue += num.innerHTML;
      total.textContent += numValue;
      num1 += numValue;
    });
  });
};

const displayOperator = function () {
  operators.forEach((operator) => {
    operator.classList.add(".operator-style");
    operator.addEventListener("click", () => {
      num1 += operator.innerHTML;
      operationString.textContent += num1;
      total.textContent = "";
    });
  });
  numValue = "";
};

init();
displayNum();
displayOperator();
clear.addEventListener("click", init);
