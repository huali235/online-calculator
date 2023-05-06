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
let tempNum = "";
let numArray = [];
let currentOperator = "";
let isSecondOperand = false;
/// Functions

const init = function () {
  numValue = "";
  currentOperator = "";
  isSecondOperand = false;
  total.textContent = "";
  operationString.textContent = "";
  tempNum = "";
  numArray = [];
};

const appendFirstNumber = function () {
  numbers.forEach((num) => {
    isSecondOperand = false;
    num.addEventListener("click", () => {
      numValue = "";
      numValue += num.innerHTML;
      total.textContent += numValue;
      if (isSecondOperand) {
        tempNum += numValue;
        numArray[1] = tempNum;
      } else {
        tempNum += numValue;
        numArray[0] = tempNum;
      }
    });
  });
};

const chooseOperation = function () {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      numArray.push(tempNum);
      currentOperator = operator.innerHTML;
      operationString.textContent +=
        numArray.length > 1
          ? ` ${numArray[1]} ${operator.innerHTML}`
          : ` ${numArray[0]} ${operator.innerHTML}`;
      total.textContent = "";
      tempNum = "";
      isSecondOperand = true;
      console.log(numArray);
    });
  });
};

const calculateTotal = function () {
  equals.addEventListener("click", () => {
    numArray.push(tempNum);
    let num1 = Number(numArray[0]);
    let num2 = Number(numArray[1]);
    let result;
    if (currentOperator === "+") result = num1 + num2;
    else if (currentOperator === "-") result = num1 - num2;
    else if (currentOperator === "X") result = num1 * num2;
    else if (currentOperator === "/") result = num1 / num2;
    total.textContent = result;
  });
};

init();
appendFirstNumber();
chooseOperation();
calculateTotal();
clear.addEventListener("click", init);
