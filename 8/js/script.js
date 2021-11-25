"use strict";

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	/* num = 10; */
	let num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

/* function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 5));
console.log(calc(3, 5));
console.log(calc(5, 5));
console.log(calc(7, 5)); */

function ret() {
	let num = 50;

/*Любой  код */

	return num;
}

const cifra = ret();
console.log(cifra);

const logger = function () {
	console.log("Hello");
};
logger();

const calc = (a, b) => {return a + b};