"use strict"
const log = txt => console.log(txt);
//========================================================================

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

const AllList = Array.from(document.querySelectorAll('.categories > li'));
log(AllList);

// const InnerTxt = Array.from(document.querySelectorAll('.categories li ul'));
// log(InnerTxt);

let res = [];

AllList.map(i => {
	res.push(`Категория ${i.firstChild.textContent.trim()} / Количество вложенных li: ${i.firstElementChild.children.length}`)
})

log(res)