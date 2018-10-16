"use strict"
const log = txt => console.log(txt);

// const list = document.querySelector('.list');
// const firstLi = list.firstElementChild;
// firstLi.style.color = 'red'
// log(firstLi)

// const lastLi = list.lastElementChild;
// lastLi.style.color = 'blue';
//===================================
// const createList = () => {

// 	const list = document.createElement('div');
// 	list.classList.add('list');
// 	let input;
// 	const ulList = document.createElement('ul');
// 	do {
//     input = prompt('Input something');
// 	const liList = document.createElement('li');
// 	liList.textContent = input;
// 	ulList.append(liList);

	
// 	list.append(ulList);
// 	} while(input)

// 	return list
// }
// const list = createList();
// log(list)

//====================================================


/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function card() {
	let card = document.createElement('div');
	card.classList.add('post');


	let img = document.createElement('img')
	img.classList.add('post_image');
	img.setAttribute('src', 'http://via.placeholder.com/400x150');
	img.setAttribute('alt', 'dick');

	let h = document.createElement('h2');
	h.classList.add('post_title');
	h.textContent = 'Lorem ipsum dolor';
	img.append(h);

	let p = document.createElement('p');
	p.classList.add('post_text');
	p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum delectus, repellat doloribus incidunt. Fugiat ducimus est sunt earum reprehenderit sequi, asperiores nesciunt atque perspiciatis id fuga. Laudantium error, aut facilis. Adipisci expedita laboriosam consectetur temporibus enim eveniet porro, voluptatem repellendus distinctio molestiae necessitatibus deleniti doloribus consequuntur minima aliquam corporis odit excepturi eum sint similique. Ratione alias illo ipsa voluptatem cupiditate quidem et assumenda unde sequi est. Perferendis quam voluptatum eum corrupti quasi sapiente, odit quidem? Assumenda incidunt quae soluta optio libero voluptates dolorem est in labore exercitationem, nulla quis dolores totam consectetur tenetur quisquam dolorum voluptatibus amet. Ab iste perspiciatis quidem dolore blanditiis minima voluptate quam ex, perferendis eligendi magni nesciunt, laboriosam ipsa. Accusantium ab quaerat quos non aspernatur reiciendis ex ad. At, iusto id porro autem reiciendis quae veniam, unde consequatur temporibus illo voluptas magni perspiciatis consectetur. Sunt vero commodi consectetur debitis magnam laboriosam beatae velit excepturi, deleniti sed maxime eaque fugiat possimus, vitae, aspernatur. Tenetur voluptatem a architecto voluptatum aperiam ut quis reprehenderit laboriosam officiis facilis. Fugit quisquam ipsum delectus repellendus optio, minima facere recusandae saepe accusantium!';
	h.append(p);

	let a = document.createElement('a');
	a.classList.add('button');
	a.setAttribute('href', '#');
	p.append(a);


	card.append(img);

	return card;

	body.insertBefore(card)
}



log(card())
log('L')















