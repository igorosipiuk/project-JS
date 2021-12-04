"use strict";

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

/* console.dir(box); */ // Выводит в консоль все элементы ' box '

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

btns[0].style.borderRadius = "100%";
circles[1].style.backgroundColor = 'green';
circles[0].style.backgroundColor = 'red';
circles[2].style.backgroundColor = 'yellow';

box.style.cssText = `background-color: blue; width: 500px`;

/* for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создаётся новый элемент 'div'
//const text = document.createTextNode('Hello World');

div.classList.add('black');
div.style.width = '200px';
div.style.borderRadius = '10px';
//document.body.append(div);
//wrapper.append(div);// в коце блока
wrapper.prepend(div); // в начало блока

//hearts[0].before(div);
//hearts[0].after(div);

//circles[1].remove(); // удаление

hearts[0].replaceWith(circles[0]);// замена

div.innerHTML = '<h1>Hello World</h1>';// код
//div.textContent = 'Hello'; // только текст

div.insertAdjacentHTML('beforebegin', `<h2>Hello</h2>`); 
div.insertAdjacentHTML('afterbegin', `<h2>Hello</h2>`); 
div.insertAdjacentHTML('beforeend', `<h2>Hello</h2>`); 
div.insertAdjacentHTML('afterend', `<h2>Hello</h2>`); 
