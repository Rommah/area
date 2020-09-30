
let figureChoise = document.querySelector('.figureChoise');
let choise = document.querySelector('.choise');
let figureList = document.querySelector('.figureList');
let figureItem = document.querySelectorAll('.figureItem');
let sizeItem = document.querySelectorAll('.size-item');
let calculate = document.querySelectorAll('.calculate');
let result =document.querySelector('.result');
let resultText = document.querySelector('.resultText');

let formulas = [triangleArea, circleArea]

figureChoise.addEventListener('click', function(e) {
	if (!e.target.closest('.figureList')) {
		figureList.classList.toggle('show');
	}
});

document.addEventListener('click', function(e) {
	if (figureList.classList.contains('show') && !e.target.closest('.figureChoise')) {
		figureList.classList.remove('show');
	}
});

for (let i = 0; i < figureItem.length; i++) {
	figureItem[i].addEventListener('click', function(e) {
		choise.innerHTML = figureItem[i].innerHTML;
		hideCurrent(sizeItem);
		sizeItem[i].classList.add('show');
		figureList.classList.remove('show');
		if (result.classList.contains('show') ) {
			result.classList.remove('show');
		}
	});
}

for (let i = 0; i < calculate.length; i++) {
	calculate[i].addEventListener('click', function(e) {
		let size = sizeItem[i].querySelectorAll('input');
		let args = [].map.call(size, item => item = item.value)
		resultText.innerHTML = formulas[i](args);
		result.classList.add('show');
	});
}


function changeTriangle() {
	let triangle = document.querySelector('.triangle');
	let input = triangle.querySelectorAll('input');
	let input2 = Array.from(input);
	let inputValue = input2.map(item => item = item.value)

	let now = triangleArea(inputValue);
	resultText.innerHTML = now;
}

function triangleArea(arg){
	let p = (+arg[0] + +arg[1] + +arg[2]) / 2;
	let area = Math.sqrt(p * (p - arg[0]) * (p - arg[1]) * (p - arg[2]) );
	if (area == 0) {return "0:   <small>Одна из сторон равна сумме других сторон</small>"}
	if (isNaN(area)) {return 'неправильный размер сторон <small>(треугольника с таким размером не бывает)</small>'}
	return area.toFixed(2) + ' м<sup>2</sup>' ;
}


function changeCircle() {
	let circle = document.querySelector('#circle');
	let input = circle.value

	let now = circleArea(input);
	resultText.innerHTML = now;
}

function circleArea(radius) {
	let pi = 3.1415926535;
	let area = radius ** 2 * pi;
	return area.toFixed(2) + ' м<sup>2</sup>' ;
}

function hideCurrent(arr){
	for(let i of arr) i.classList.remove('show');
}
