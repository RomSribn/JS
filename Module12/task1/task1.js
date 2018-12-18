"use strict"

const log = txt => console.log(txt);

//======================================================================
/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const products = [
  { name: 'Apples', count: 50 },
  { name: 'Grapes', count: 44 },
  { name: 'Cheese', count: 128 },
  { name: 'Milk', count: 293 },
];

const container = document.querySelector('.products');
// console.log(container)
const source = document.querySelector('.productsItem').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = products.reduce((acc, item) => acc + template(item), '');

// console.log(markup)

container.innerHTML = markup;