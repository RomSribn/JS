let log = txt => console.log(txt);
//==========================================================


// class Guest{
// 	constructor(name, days, room = 'значение неизвестно(('){
// 		this.name = name;
// 		this.days = days;
// 		this.room = room;
// 	}

// 	getFullInfo(){
// 		log(`
// 	  		Guest ${this.name}
//       		Will stay for ${this.days} more days
//       		In room number ${this.room}
// 			`)
// 	}
// }

// const mango = new Guest('Mango', 7, 206);

// log(mango)
//============(Наследование в JS - скорее цепочка ссылок на контекст..)============================

// function Hero(name, xp){
// 	this.name = name;
// 	this.xp = xp;
// }

// Hero.prototype.gainXP = function(amount){
// 	log(`${this.name} gained ${amount} experience points`)
// 	this.xp += amount;
// }


// const mango = new Hero('Mango', 219898)

// log(mango)

// mango.gainXP(14098)
// mango.gainXP(14098)
// log(mango)

// function Warrior(name, xp, weapon){
// 		Hero.call(this, name, xp)
// 		this.weapon = weapon;
// }

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior

// Warrior.prototype.attack = function(){
// 	console.log(`${this.name} attacks with ${this.weapon}`);
// }

// const ajax = new Warrior('Ajax', 234346, 'Knife')

// log(ajax)
// ajax.gainXP(243987)
// log(ajax)

//=========TASKS()============

//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.


// function Account(login, email, friendsCount){
// 	this.login = login;
// 	this.email = email;
// 	this.friendsCount = friendsCount
// }

// Account.prototype.getAccountInfo = function(){
// 	log(`
// 		login: ${this.login} 
// 		email: ${this.email}
// 		friendsCount: ${this.friendsCount}`)
		
// }

// const user = new Account('user', 'user@gmail.com', 123);

// log(user)

// user.getAccountInfo()

//===================2==============================

/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string = "") {
//   this.value = string;
// }

// StringBuilder.prototype.showValue = function(str){
//  		log(this.value);
// }

// StringBuilder.prototype.append = function(str){
	
// 		this.value = this.value + str;
// }

// StringBuilder.prototype.prepend = function(str){
	
// 		this.value = str + this.value;
// }

// StringBuilder.prototype.pad = function(str){
	
// 		this.value = str + this.value + str;
// }

// const myString = new StringBuilder('.');



// myString.append('^'); 
// myString.showValue(); // '.^'

// myString.prepend('^'); 
// myString.showValue(); // '^.^'

// myString.pad('='); 
// myString.showValue(); // '=^.^='

//=====================3==================


/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(maxSpeed) {
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */

//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//   }
  
//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     if(spd < this.maxSpeed){
//     	return this.speed = spd;
//     }
//     return log('error((______accelerate');
//   }
  
//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     if(spd < this.maxSpeed && spd > 0){
//     	return this.speed = spd;
//     }
//     return log('error((___decelerate');
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     if(this.running){
//     	return this.distance = hours * this.speed;
//     }
//   }
// }

// const cr = new Car(300);

// cr.turnOn();

// log(cr)

// cr.accelerate(0);
// cr.decelerate(0);
// cr.drive(5);

// log(cr)


//==================4==============


//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200


// done)))
//======================5===========

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
  constructor(maxSpeed, value) {
    // ... код
    this._value = value;
  }
  // ... код
}






















	