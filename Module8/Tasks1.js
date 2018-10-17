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
const val = document.querySelector('span.js-value');
log(val)
let res = 0;

const plusAcc = document.querySelector('button.js-sup');
plusAcc.addEventListener('click', handlePlus);

const minusAcc = document.querySelector('button.js-sub');
minusAcc.addEventListener('click', handleMinus);


function handlePlus(){
  res += 1;
  return val.textContent = res;
}

function handleMinus(){
  res -= 1;
  return val.textContent = res;
}









