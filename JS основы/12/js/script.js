"use strict";
// Методы и свойства массивов

//const arr = [1, 2, 3, 6, 8];
/* // arr.pop();
arr.push(10);
console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} */

/* for (value of arr) {
	console.log(value);
} */

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */


/* arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* const str = prompt("", "");
const products = str.split(", ");
//console.log(products);
products.sort();
console.log(products.join('; ')); */

const arr = [20, 10, 13, 65, 55, 8];
/* arr.sort();
console.log(arr); */
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return (a - b);
}