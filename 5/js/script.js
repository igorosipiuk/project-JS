"use strict";

if (4 == 9) {
	console.log('ok!');	
} else {
	console.log('no!');
}


const num = 50;
if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Много!');
} else {
	console.log("ok");
}


/* ? - тернарный знак */
/* (num === 50) ? console.log("yes") : console.log("hren"); */

/* ------------  строгое сравнение*/

const number = 90;

switch (number) {
	case 50:
		console.log('Неверно');
		break;
	case 60:
		console.log('Неверно');
		break;
	case 70:
		console.log('В точку');
		break;
	default:
		console.log('В следующий раз!');
		break;
}