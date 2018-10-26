"use strict"
const log = txt => console.log(txt);
//======================================================================
/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

let minutes = 0;
let seconds = 0;
let mseconds = 0;
const minutesCounter = ()=> {
  setInterval(()=>{
  minutes += 1;
  if(minutes >= 60){
    minutes = 0;
  }
    clockface.textContent = `${minutes}:${seconds}.${mseconds}`;

}, 10000);}
const secondCounter = ()=> {
  setInterval(()=>{
  seconds += 1;
  if(seconds >= 60){
    seconds = 0;
  }
  clockface.textContent = `${minutes}:${seconds}.${mseconds}`;
}, 1000);}

const msecondsCounter = ()=> {
  setInterval(()=>{
  mseconds += 1;
  if(mseconds >= 10){
    mseconds = 0;
  }
  clockface.textContent = `${minutes}:${seconds}.${mseconds}`;
}, 100);}

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
startBtn.addEventListener('click', handleChangeColor);
stopBtn.addEventListener('click', handleChangeColor);


function handleStart(){
  minutesCounter();
  secondCounter();
  msecondsCounter();

}
function handleChangeColor(evt){
  const target = evt.target;
  // log(target)
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
 
}
function handleStop(evt){

  minutes = 0;
  seconds = 0;
  mseconds = 0;
  clearInterval(minutesCounter);
  clearInterval(secondCounter);
  clearInterval(msecondsCounter);
  clockface.textContent = `${minutes}:${seconds}.${mseconds}`;
}

/*
* Вспомогательные функци
*/


/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   // elem.textContent = getFormattedTime(time);
// }

/*
* Подсветка активной кнопки
*/
// function setActiveBtn(evt) {
//   const target = evt.target;
//   log(target)
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }



