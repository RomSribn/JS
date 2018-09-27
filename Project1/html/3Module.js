// /*
//   Напишите функцию formatString(str)
  
//   - Функия принимает на вход строку str
//   - Если длина строки не превышает 40 символов, функция возвращает ее. 
//   - Если длина больше 40 символов, то функция обрезает строку до 40-ти
//     символов и добавляет в конец строки троеточие '...', после чего 
//     возвращает укороченную версию.
// */
// function formatString(str) {
//   let res;
//   if (str.length >= 41) {
//     let newAr = str.split("");
//     newAr1 = newAr.slice(0, 41);
//     res = `${newAr1.join("")}...`;
//   } else {
//     res = str;
//   }
//   return res
// }

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// function checkForSpam(str){
//   if(str.includes('spam') || str.includes('sale')){
//     console.log(false);
//   }else{
//     console.log(true);
//   }
  
// }
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// /*  
//   Написать функцию, getPx(str) 

//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.
// */
// function getPx(str){
//   let res;
//   if(typeof(str) === "string"){
//     res = Number.parseFloat(str);
//   }else{
//     return null;
//   }
//   return res;
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/
// function findLongestWord(str){
//   let arr = str.split(" ");
//   let longestWrd = arr[0];
//   for(let i = 0; i < arr.length; i += 1){
//     if(longestWrd.length < arr[i].length){
//       longestWrd = arr[i];
//     }
//   } 
//   return longestWrd;
// }


// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'


//======================================================================

/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid (login) {}, для которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login) {}, которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(logins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let res;
  if (login.length >= 4 && login.length <= 16) {
    res = false;
  } else {
    res = true;
  }
  return res;
};



const isLoginUnique = function(login) {
  let resu;
  if(logins.includes(login)){
    resu = true;
  }else{
    resu = false;
  }
  return resu;
};
  


const addLogin = function(login){
  let result;
  if (isLoginValid(login)){
    result = console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if(isLoginUnique(login)){
    result = console.log('Такой логин уже используется!');
  }else{
    result = console.log('Логин успешно добавлен!');
  }
  return result;
};

//Вызовы функции для проверки
// addLogin("Ajax"); // 'Логин успешно добавлен!'
// addLogin("robotGoogles"); // 'Такой логин уже используется!'
// addLogin("Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin("jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'

addLogin('Mango')