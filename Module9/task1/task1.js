"use strict"
const log = txt => console.log(txt);
//======================================================================
/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const body = document.querySelector('body');
const start = document.querySelector('.js-start');
const stop = document.querySelector('.js-stop');
// log(start)
let i = 0;
let timerId = null;

start.addEventListener('click', ()=>{
  timerId = setInterval(handleStartColor, 500);
});
stop.addEventListener('click', ()=>{
  clearInterval(timerId)
})


function handleStartColor(){
    let rand = randomInteger(0, 6)
    body.setAttribute('style', `background-color: ${colors[rand]}`);
  
  
}
  



function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }