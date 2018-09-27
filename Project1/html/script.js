// const numbers = [[12, 5, 7], [18, 9, 14, 46], [24, 8]];
// let hasNumber = false; 
// const value = Number(prompt('введите число'));
// const max = numbers.length;
// for (let i = 0; i < max; i += 1){

//     for (let j = 0; j < numbers[i].length; j += 1){
//       if(numbers[i][j] === value){
//         hasNumber = true
//         break;
//       }
//     }
// }

// const message = hasNumber 
// ? console.log('Есть такое число')
// : console.log('Такого числа нет');
// ===========================================================

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;
let arr = [];

for (let i = min; i <= max; i += 1){
  arr.push(i);
    if(i%3 === 0){
      i = 'Fizz';
      
  }
  if (i%5 === 0 && i%3 !== 0){
      i = 'Buzz';
    }
    arr.push(i);
}
// for (let i = 1; i <= max; i += 1){
//  if(i%3 === 0){
//     i = 'Fizz';
//   }
// }
//   for (let j = 1; j <= max; j += 1){
//     if (j%5 === 0 && j%3 !== 0){
//       j = 'Buzz';
//     }
//   }
  

console.log(arr);

