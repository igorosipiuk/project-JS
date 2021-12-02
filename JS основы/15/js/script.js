"use strict";
// примеры задач
 let a = 5; 
alert(a++); // 5

/* let a = [] + false - null + true;
console.log(a); // NaN */

/* let y = 1,
	x = y = 2;
console.log(x); // 2 */

/* let a = [] + 1 + 2;
console.log(a); // 12 */

/* alert("1"[0]); // 1 */


// консоль разработчика\

function hello() {
	console.log('Hello');
}
hello();

function hi() {
	console.log('Say hi');
}
hi();

const arr = [1, 14, 4, 30, 54],
	sorted = arr.sort(compareNum);

function compareNum(a, b) {
	return (a - b);
}
console.log(sorted);