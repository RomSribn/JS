const log = txt => console.log(txt);
// /*
//   Напишите функию getPropValues(arr, prop), принимающую 
//   параметры arr - массив, и prop - имя ключа в объекте. 
  
//   Функция должна возвращать массив всех значений этого ключа из arr.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */
// const log = txt => console.log(txt);
// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];


// function getPropValues(arr, prop){
//   const some = arr.map(elem => elem[prop]);
//   return some
// }
// console.log(getPropValues(guests, "age" ));
//===================================================================

/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// // guests.map(elem=> console.log(elem.inactiveDays > 10))


// function setGuestState(users, period){
//  let res = users.map(arr=>({
//    ...arr,
//    isActive: arr.inactiveDays < period
//  }));
//  return res;
 
//  }



// // Вызовы функции для проверки
// console.log(
//   setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
//=================================================================

/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// function getActiveGuests(array){
//  let res = array.filter(elem => elem.isActive);
//  return res
// }

// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
// log(guests)
//=====================================================================
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// function getGuestsOlderThan(guests, age){

//  let res = guests.filter(elem => elem.age > age);
//  return res
// }


// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []

//================================================================
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];


// function getGuestById(guests, id){

//  let res = guests.find(elem => elem.id === id)
//  return res
// }

// // Вызовы функции для проверки
// console.log(
//   getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}

// console.log(
//   getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}

// console.log(
//   getGuestById(guests, 5)
// ); // undefined
//=========================================================================

// /*
//   Используя метод reduce, посчитайте сумму 
//   всех значений свойств объекта order.
// */ 
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };

// const values = Object.values(order);
// const res = values.reduce((acc, num) => acc + num, 0)

// console.log(res); // 150
//=======================================================

// /*
//   Напишите функцию getTotalPrice(products, order), где 
//   products - объект со свойствами "имя продукта":"цена за единицу"
//   order - объект со свойствами "имя продукта":"количество единиц".
  
//   Функция возвращает общую сумму стоимости всех продуктов заказа.
  
//   PS: используйте метод reduce
// */

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3
// };
// // let totalPrice = 0;
// // function getTotalPrice(products, order){
  
// //   for(let item in order){
// //     totalPrice += order[item] * products[item]
// //   }
// //   return totalPrice
// // }

// function getTotalPrice(products, order){
//  const elem = Object.keys(order)
//  let res = elem.reduce((acc, val) => acc += products[val] * order[val] , 0 )
//  return res
// }


// // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140

// console.log(getTotalPrice(products, orderB)); // 130
//=================================================================
// /*     
//   Напишите функию allGuestsActive(guests), принимающую 
//   один параметр guests - массив объектов гостей. 
  
//   Функция должна возвращать true если значение поля isActive 
//   всех объектов true, в противном случае false.
  
//   PS: используйте метод every или some, никаких for!
// */

// const guestsA = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: true },
//   { name: "Ajax", isActive: true }
// ];

// function allGuestsActive(guests){
//  return guests.every(elem=> elem.isActive)
// }

// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true
//================================================================== ДЗ5 МОДУЛЬ



// /*
//  * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
//  * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
//  */
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     phone: '+1 (848) 556-2344',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     phone: '+1 (855) 582-2464',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     phone: '+1 (814) 593-3825',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     phone: '+1 (909) 547-2687',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     phone: '+1 (956) 512-2693',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     phone: '+1 (876) 411-2433',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     phone: '+1 (979) 504-2554',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// /**
//  * Получить массив имен (поле name) всех пользователей
//  */
// const getAllNames = arr => {
//  let res = arr.map(elem => elem.name);
//  return res
// };

// console.log(getAllNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
// /**
//  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
//  */
// const getUsersByEyeColor = (arr, color) => {
//  let res = arr.filter(elem => elem.eyeColor === color);
//  return res
// };

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */Sort
// const getUsersByGender = (arr, gender) => {
//   let res;
//  res = arr.map(elem =>{
//    if(elem.gender === gender){
//      return elem.name
//    }
//    return null
//  });
//   return res
// };
// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => {
//   let res = arr.filter(elem => !elem.isActive)
//  return res
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => {
//   return arr.find(elem=> elem.email === email)
// };


// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => {
//   return arr.filter(elem=> elem.age > min && elem.age < max)
// };


// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
// console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => {
//   let res = arr
//         .map(elem => elem.balance)
//         .reduce((acc, elem) => acc + elem, 0);
//   return res
// };

// console.log(getTotalBalance(users)); // 20916
                                
                                
// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => {
//     return arr.map(elem => {
//       if(elem.friends.includes(name)){
//         return elem.name
//       }
//     })
// };


// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
                                            


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
*/
                                         
/**
* Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
* повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     phone: '+1 (848) 556-2344',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     phone: '+1 (855) 582-2464',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     phone: '+1 (814) 593-3825',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     phone: '+1 (909) 547-2687',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     phone: '+1 (956) 512-2693',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     phone: '+1 (876) 411-2433',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     phone: '+1 (979) 504-2554',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getAllSkills = arr => {
//  return [...new Set(
//  arr
//  .map(i => i.skills)
//  .flat()
//  .sort()
//  )]
// }
//2 способ
// function getAllSkills(arr){
//  return arr
//    .map(val=> val.skills)
//    .flat()
//    .reduce((acc, val)=>{
//    if(!acc.includes(val)){
//      acc.push(val);
//    }
//    return acc
//  }, [])
//    .sort()

// }

  

// const getAllSkills = arr => {
// return let res = arr
//  .reduce((ac, i)=> [...ac, ...i.skills], [])
//  .sort()
//  .flat();
//  [...new Set(res)]
// };

// const getAllSkills = arr => [...new Set()]
// const getAllSkills = (array) => [...new Set(array.map(item => item.skills).flat())];
// console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//================================== Сортировка массива по массиву
         // let items = [
//       ['Anne', 'a'],
//       ['Bob', 'b'],
//       ['Henry', 'c'],
//       ['Andrey', 'd'],
//       ['Jason', 'e'],
//       ['Thomas', 'f']
// ];

// let sorting = ['e', 'f', 'c', 'd', 'b', 'a'];

// let result = [];

// sorting.forEach(key => {
//   let found = false;
//   items = items.filter(item => {
//     if(!found && item[1] === key){
//       result.push(item);
//       found = true;
//       return false;
//     }
//     return true;
//   })
// })


// result.map(i => log(i[0]))

                    
/**
* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    phone: '+1 (848) 556-2344',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    phone: '+1 (855) 582-2464',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    phone: '+1 (814) 593-3825',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    phone: '+1 (909) 547-2687',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    phone: '+1 (956) 512-2693',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    phone: '+1 (876) 411-2433',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    phone: '+1 (979) 504-2554',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNamesSortedByFriendsCount = arr => {
//   let sorting = arr.map(i => i.friends.length);
//   let items = arr.map(i => i.friends);
//   let res = {};

//   sorting.forEach(key => {
//     let found = false;
//     items = items.filter(item => {
//       if(!found && items[0] === key){
//           result.push(items);
//           found = true;
//           return false;
//       }
//       return true
//     })
//   })
  
//   return res

// };

const getUserNamesSortedByFriendsCount = arr => {
  return arr
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(i => i.name)
      }
console.log(getUserNamesSortedByFriendsCount(uses)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

alert('Hi')



