"use strict"
const log = txt => console.log(txt);
//======================================================================

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

const inpt = document.querySelector('input.input');
const resPlace = document.querySelector('.input-value');

inpt.addEventListener('input', handleInput);
inpt.addEventListener('focus', handleFocus);


function handleInput(){
	resPlace.textContent = `Current input value: ${inpt.value}`;
}

function handleFocus(){
	log('Input is in focus!');
}


