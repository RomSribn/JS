"use strict"
const log = txt => console.log(txt);
//==================================================================================
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const user = {
      name : 'AGATA',
      age: 1000000
};


function getAllUsers(){

  fetch('https://test-users-api.herokuapp.com/users')
  .then(response => {
    if(response.ok) return response.json();
    throw new Error('Error fetching data');
  })
  .then(data => log(data.data))
  .catch(error => log('Error'))

}


function getUserById(ID){
  fetch(`https://test-users-api.herokuapp.com/users/${ID}`)
  .then(response => {
    if(response.ok) return response.json();
    throw new Error('Error fetching data');
  })
  .then(data => log(data.data))
  .catch(error => log('Error'))
}


// getUserById('5beda2d4a91df2001445aa70');

function addUser(name, age){

  fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({ name: name, age: age}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    if(response.ok) return response.json();
    throw new Error('Error fetching data');
    
  })
  .catch(error => log('Error'))

}

function removeUser(ID){

  fetch(`https://test-users-api.herokuapp.com/users/${ID}`, {
    method: "DELETE",
}).then(() => console.log('success'))
.catch(error => console.log('ERROR' + error));

}

function updateUser(ID, user){

   fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(() => console.log('success'))
  .catch(error => console.log('ERROR' + error));
}

// addUser('Ura', 23);
// removeUser('5beda1fca91df2001445aa6a')
updateUser('5bf40e8ade9d1500140d0b82', user)
getAllUsers();














