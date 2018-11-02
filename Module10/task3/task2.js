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

/* 
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

let minutesCounterId;
let secondCounterId;
let msecondsCounterId;

const minutesCounter = ()=> {
   minutesCounterId = setInterval(()=>{
  minutes += 1;
  if(minutes >= 60){
    minutes = 0;
  }
    clockface.textContent = `${minutes}:${seconds}.${mseconds}`;

}, 10000);}

const secondCounter = ()=> {
   secondCounterId = setInterval(()=>{
  seconds += 1;
  if(seconds >= 60){
    seconds = 0;
  }
  clockface.textContent = `${minutes}:${seconds}.${mseconds}`;
}, 1000);}

const msecondsCounter = ()=> {
   msecondsCounterId = setInterval(()=>{
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

  clearInterval(minutesCounterId);
  clearInterval(secondCounterId);
  clearInterval(msecondsCounterId);

  minutes = 0;
  seconds = 0;
  mseconds = 0;


  clockface.textContent = `${minutes}:${seconds}.${mseconds}`;
}
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");
const resetBtn = document.querySelector('.js-timer-reset');

const timer = {
  startTime: null,
  deltaTime: 0,
  id: null,
  startTime: 0,
  isActive: false,
  start(){
    if(this.isActive) return;
    this.isActive = true;
    this.startTime = Date.now() - this.deltaTime;
    this.id = setInterval(()=>{
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      updateClockface(this.deltaTime);
      // formatTime(deltaTime)
    }, 100)
  },
  stop(){
      clearInterval(this.id);
      this.isActive = false;
      updateClockface(this.deltaTime);
    },
  reset(){
    this.deltaTime = 0;
    clearInterval(this.id);
    this.isActive = false;
    updateClockface(this.deltaTime);
    },
  setActiveBtn(evt) {
    const target = evt.target;
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  resetBtn.classList.remove('active');
  
  target.classList.add('active');
}
};

/*
* Вспомогательные функции
*/

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));

startBtn.addEventListener('click', timer.setActiveBtn.bind(timer));
stopBtn.addEventListener('click', timer.setActiveBtn.bind(timer));
resetBtn.addEventListener('click', timer.setActiveBtn.bind(timer));


/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
  const formattedTime = formatTime(time);
  clockface.textContent = formattedTime;
}

function formatTime(ms){
  const date = new Date(ms);

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${date.getMinutes()}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${date.getSeconds()}` : seconds;

  let mseconds = String(date.getMilliseconds()).slice(0, 1);

  return `${minutes}:${seconds}.${mseconds}`;
}

/*
* Подсветка активной кнопки
*/

function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}

