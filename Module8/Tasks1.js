"use strict"
const log = txt => console.log(txt);
//========================================================================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const btn = document.querySelector('.button');
let count = 0
btn.addEventListener('click', addClickCount);

function addClickCount(){
  count += 1;
  return btn.textContent = count;
}