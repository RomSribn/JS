"use strict"
const log = txt => console.log(txt);
//======================================================================
/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");
const mainForm = document.querySelector(".mainForm");
// console.log(mainForm);
const firstNameReg = /^([a-z]|[а-яё]|[а-яґєії`´ʼ’ʼ’])+(\s[a-z]+|\s[а-яё]+|\s[а-яґєії`´ʼ’ʼ’]+){0,2}$/ig;
const lastNameReg = /^([a-z]|[а-яё]|[а-яґєії`´ʼ’ʼ’])+(([\s-]|(\s-\s))[a-z]+|([\s-]|(\s-\s))[а-яё]+|([\s-]|(\s-\s))[а-яґєії`´ʼ’ʼ’]+){0,1}$/ig;

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault()
  const validateRes = {
    'first name': firstNameReg.test(firstname.value),
    'last name':  lastNameReg.test(lastname.value)
  }
  log(validateRes)
}
