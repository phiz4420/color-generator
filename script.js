//written by April Tsai, 08/18/2020

const colorContainer = document.querySelector('.colorContainer');
const bodyBcg = document.querySelector('body');
const colorHex = document.querySelector('.colorHex');

colorContainer.addEventListener('click', changeColor);

function changeColor(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);

	bodyBcg.style.backgroundColor = "#" +randomColor;
	colorContainer.style.backgroundColor = "#" +randomColor;
	colorHex.innerHTML =  "#" +randomColor;
}