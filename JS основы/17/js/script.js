"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns);
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);
console.log(circles[0]);


const hearts = document.querySelectorAll('.heart');
/* console.log(hearts); */
hearts.forEach(item => {
	console.log(item);
});

//const oneHeart = document.querySelector('.heart'); // только первый элемент
//const oneHeart = document.querySelector('button'); // только первый элемент
//const oneHeart = document.querySelector('.circle'); // только первый элемент
const oneHeart = document.querySelector('div'); // только первый элемент
console.log(oneHeart);