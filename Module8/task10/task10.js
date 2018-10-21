"use strict"
const log = txt => console.log(txt);
//======================================================================
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
const listItem = document.querySelector('ul.js-menu');
// log(listItem)

listItem.addEventListener('click', handleClick);

function handleClick(event){
  const target = event.target;
  // log(target)
  if(target.nodeName !== 'A') return
    setActiveLink(target)
}

function setActiveLink(nextActiveLink){
  const currentActiveLink = listItem.querySelector("a.menu-link-active");
  if(currentActiveLink) {
    currentActiveLink.classList.remove('menu-link-active');
  }
  nextActiveLink.classList.add('menu-link-active');
}