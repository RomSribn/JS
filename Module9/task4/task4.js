"use strict"
const log = txt => console.log(txt);
//==================================================================================

/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

const DELAY = 1000;

let goodsAmount = 100;

const processOrder = amount => new Promise((res, rej)=>{
  setTimeout(()=>{
    if(goodsAmount >= amount){
      res('Ваш заказ готов!');
    }
    if(typeof amount === 'string'){
      rej("Некорректный ввод!");
    }
    res('К сожалению на складе недостаточно товаров!');

  }, DELAY);
})

// Вызовы функции для проверки
// processOrder(50)
//   .then(x => console.log(x)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(50)
//   .then(x => console.log(x)) // Ваш заказ готов!
//   .catch(err => console.log(err));

processOrder(500)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

// processOrder("qwe")
//   .then(x => console.log(x))
//   .catch(err => console.log(err)); // Некоректный ввод!

// console.log(obj);