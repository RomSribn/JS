"use strict"
const log = txt => console.log(txt);
//========================================================================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const btn = document.querySelector('.button');
// let count = 0
// btn.addEventListener('click', addClickCount);

// function addClickCount(){
//   count += 1;
//   return btn.textContent = count;
// }
//=====================================
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// const firstAccum = document.querySelector('.calc>input.firstAccum');
// const secondAccum = document.querySelector('.calc>input.secondAccum');
// const resultPlace = document.querySelector('.calc>span.result');
// const btn = document.querySelector('.calc>button');

// btn.addEventListener('click', handleSum);

// function handleSum(){
//   let valFromFirstAccum = firstAccum.value.trim();
//   let valFromSecondAccum = secondAccum.value.trim();
//   return resultPlace.textContent = `${+valFromFirstAccum + +valFromSecondAccum}`;
// }

//=======================================
/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/

// const btn = document.querySelectorAll('button.btn');
// const val = document.querySelector('span.js-value');
// // log(typeof +val.textContent)
// let res = 0;

// const plusAcc = document.querySelector('button.js-add');
// // log(plusAcc)
// plusAcc.addEventListener('click', handlePlus);

// const minusAcc = document.querySelector('button.js-sub');
// // log(minusAcc)
// minusAcc.addEventListener('click', handleMinus);


// function handlePlus(){
//   res += 1;
//   return val.textContent = res;
// }

// function handleMinus(){
// 	if(+val.textContent <= 0) return
//   res -= 1;
//   return val.textContent = res;
// }
//==================================
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

// const impContent = document.querySelectorAll('div.options>label>input[type="radio"]');
// // impContent.setAttribute('some', 4)
// // log(impContent)
// const btn = document.querySelector('button.btn');
// // log(btn);
// const resultPlace = document.querySelector('p.result');
// // log(resultPlace);
// const form = document.querySelector('.question-form');
// // form.addEventListener('submit', handleGetOptions);
// impContent.addEventListener('click', handleGetOptions)
// function handleGetOptions(event){
// 	event.preventDefault()
// 	const target = event.target;
//   if(impContent.getAttributes('checked')){
//   	return resultPlace.textContent = `Result: ${impContent.getAttributes('value')}`
//   }
// }

let form = document.querySelector('form'),
	submit = document.querySelector('button'),
	result = document.querySelector('.result'),
	val = null
form.onclick = function(e){
	let target = e.target;
	if(target.tagName == 'INPUT') val =  target.value;
}

submit.onclick = function(){
result.innerHTML = val
}





