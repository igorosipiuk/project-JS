"use strict";

// ОПЕРАТОРЫ (инкримент и или оператор отрицания)

console.log('arr' + " - obj");
console.log(4 + '5');


let incr = 10,
  	decr = 10;

/* incr++; // увеличение на 1   ++incr префикс
decr--; // уменьшение на 1   decr++ постфикс */

console.log(++incr);
console.log(--decr);

/* && и - 2 или больше значения правда
|| или  1 из значений правда */

const isChecked = true,
    	isClose = false;
console.log(isChecked && !isClose);
console.log(isChecked || !isClose); // ! оператор отрицания