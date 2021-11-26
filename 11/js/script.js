"use strict";

// Функция CALLBACK

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function donne() {
	console.log('Я прошёл этот урок!');
}
learnJS("JS", donne);

// Объекты ч2

const option = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log("TEST");
	}
};

option.makeTest();

const { border, bg } = option.colors;
console.log(bg);
/* console.log(option.name);
delete option.name;
console.log(option); */

/* for (let key in option) {
	if (typeof (option[key]) === 'object') {
		for (let i in option[key]) {
			console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
		}
	} else {
      console.log(`Свойство ${key} имеет значение ${option[key]}`);
	}
} */

console.log((Object.keys(option)).length);