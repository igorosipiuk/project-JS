'use strict';

/* const btn = document.querySelector('button'), */
const btns = document.querySelectorAll('button');


/* btn.addEventListener('click', () => {
	alert('click');
});
btn.addEventListener('click', () => {
	alert('Secondclick');
}); */


/* 
btn.addEventListener( 'mouseenter' 'click', (event) => {
	console.log (event); (event.target);
	event.target.remove();
	 console.log('Hover'); 
}); */

 let i = 0;

const deleteElement = (event) => {
	console.log(event.target);
	console.log(event.type);
	//i++;
	//if (i == 1) {
	//	btn.removeEventListener('click', deleteElement);
//};
 }; 

/* btn.addEventListener('click', deleteElement); */
	btns.forEach(btn => {
		btn.addEventListener('click', deleteElement, {once:true});
	});

const link = document.querySelector('a');


link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target);
});