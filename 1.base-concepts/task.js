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
	console.log(solveEquation(1, 5, 4));
	console.log(solveEquation(1, 2, 1));
	console.log(solveEquation(1, 2, 10));
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyRate = percent / 100 / 12;

	let principal = amount - contribution;

	const mortgage = {
		principal,
		monthlyPayment: principal * (monthlyRate * (1 + monthlyRate) ** countMonths / ((1 + monthlyRate) ** countMonths - 1))
	};

	mortgage.totalPayment = countMonths * mortgage.monthlyPayment;

	let result1 = calculateTotalMortgage(10, 0, 50000, 12);
	let roundedResult1 = roundNumber(result.totalPayment, 2);
	console.log(roundedResult1);

	let result2 = calculateTotalMortgage(10, 1000, 50000, 12);
	let roundedResult2 = roundNumber(result.totalPayment, 2);
	console.log(roundedResult2);

	let result3 = calculateTotalMortgage(10, 20000, 20000, 48);
	let roundedResult3 = roundNumber(result.totalPayment, 2);
	console.log(roundedResult3);

	let result4 = calculateTotalMortgage(10, 0, 10000, 36);
	let roundedResult4 = roundNumber(result.totalPayment, 2);
	console.log(roundedResult4);

	let result5 = calculateTotalMortgage(15, 0, 10000, 36);
	let roundedResult5 = roundNumber(result.totalPayment, 2);
	console.log(roundedResult5);
}
