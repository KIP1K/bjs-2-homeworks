"use strict";

function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    let sqrtD = Math.sqrt(d);
    let x1 = (-b + sqrtD) / (2 * a);
    let x2 = (-b - sqrtD) / (2 * a);
    return [x1, x2];
  }
}

console.log(solveEquation(1, -7, 12)); // [-3, 4]
console.log(solveEquation(1, -3, 2)); // [1]
console.log(solveEquation(1, 5, 6)); // []

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;

  let principal = amount - contribution;

  return {
    principal,
    monthlyPayment: principal * (monthlyRate * (1 + monthlyRate) ** countMonths / ((1 + monthlyRate)**countMonths - 1)),

    totalPayment: countMonths * monthlyPayment
  };
}

function roundNumber(num, decimalPlaces) {
  decimalPlaces = Math.pow(10, decimalPlaces);
  return Math.round(num * decimalPlaces) / decimalPlaces;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(roundNumber(52749.53, 2)); 

console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(roundNumber(51694.54, 2)); 