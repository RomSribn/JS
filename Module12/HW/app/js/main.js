'use strict'
const log = txt => console.log(txt);

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

/*
 ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.
          
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
	const key = '5c265894d43f1d1580ffa62584e53c27d612d3cfaf289';
// const Handlebars = require('handlebars');
const cardMarkup = document.querySelector('.cards');
const forSearching = {
	input: document.querySelector('input[type="text"]'),
	submit: document.querySelector('input[type="submit"]')
}

const source = document.querySelector('.cardTemplate').innerHTML.trim();

const template = Handlebars.compile(source);
(function(){
 console.log('obj');
	Object.values(localStorage).map(i => {
	cardMarkup.insertAdjacentHTML('afterbegin', template(JSON.parse(i)))
})
})();

let countStorage = 0;
// log(template(sourceJSON))
// cardMarkup.insertAdjacentHTML('afterbegin', template(sourceJSON))
function isValidUrl(url)
{
  var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
}
function fetchAPI(link) {
	return fetch(`http://api.linkpreview.net/`, {
		method: 'POST',
  		mode: 'cors',
  		body: JSON.stringify({key: key, q: link}),
	})
			.then(response => {
				if(response.ok) return response.json();
				throw new Error('Error in fetching')
			})
			.catch(err => log('АШИБКА',err))
}

// fetchAPI().then(data => log(data))

forSearching.submit.addEventListener('click', handleInputLink);
// localStorage.setItem('myCat', 'Tom');
function handleInputLink(){
	if(!isValidUrl(forSearching.input.value)){
		alert('Invalid url');

		return
	}
	fetchAPI(forSearching.input.value).then(data => {
		if(!data){
			alert('Ничего не найдено((')
			return
		}
		countStorage += 1;
		cardMarkup.insertAdjacentHTML('afterbegin', template(data))
		console.log(data);
		localStorage.setItem(forSearching.input.value, JSON.stringify(data));
		forSearching.input.value = '';
	})
}

// console.log(localStorage.getItem(1));

















