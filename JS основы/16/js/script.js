"use strict";

// Динамическая типизация

// В строку
     // 1й вариант
console.log(typeof (String(null)));
console.log(typeof (String(4)));

    // 2й
console.log(typeof (5 + ''));

const num = 5;

console.log("htttps:// vk.com//catalog/" + num);
console.log(`htttps:// vk.com//catalog/${num}/5`);

const fontSize = 26 + 'px';

// В число

// 1й
console.log(typeof (Number('4')));
//2й
console.log(typeof (+'5'));
console.log(typeof (+'igor'));
//3й
console.log(typeof (parseInt('15px', 10)));

let answ = +prompt('Hello', "");

//В Boolean значение

//0, '', null, undefined, NaN; // всё false
 // 1й
let switcher = null;
//let switcher = 1;
if (switcher) {
	console.log('Igor...');
}
	
//2й

console.log(typeof (Boolean('4')));
console.log(typeof (!!'4'));

