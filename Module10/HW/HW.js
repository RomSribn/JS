"use strict"
const log = txt => console.log(txt);
//==================================================================================
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");
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
  pause(){
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
  resetBtn.classList.remove('active');
  
  target.classList.add('active');
}
};

/*
* Вспомогательные функции
*/

// startBtn.addEventListener('click', timer.start.bind(timer));
// resetBtn.addEventListener('click', timer.reset.bind(timer));

startBtn.addEventListener('click', handleStartBtnClick);
resetBtn.addEventListener('click', handleResetBtnClick);



startBtn.addEventListener('click', timer.setActiveBtn.bind(timer));
resetBtn.addEventListener('click', timer.setActiveBtn.bind(timer));

function handleStartBtnClick(){
  if(!timer.isActive){
    timer.start();
    this.textContent = 'Pause';
  }else{
    timer.pause();
    this.textContent = 'Continue';
  }
}
function handleResetBtnClick(){
    timer.reset();
    startBtn.textContent = 'Start';
}





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
