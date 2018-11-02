"use strict"
const log = txt => console.log(txt);
//======================================================================



let menuWrapper   = document.getElementById('menu');
let menuStructure = [
    {
        text : 'menu-1',
        sub  : [
            {
                text : 'submenu-1'
            }, {
                text : 'submenu-2',
                sub  : [
                    {
                        text: 'double-sub-1'
                    }, {
                        text : 'double-sub-2',
                        sub  : [
                            {
                                text: 'tripple-sub-1'
                            }, {
                                text: 'tripple-sub-2'
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        text : 'menu-2',
        sub  : [
            {
                text: 'double-sub-1'
            }, {
                text: 'double-sub-1'
            }
        ]
    }
];

function createList(list, level = 0, parent) {
    let listWrapper = document.createElement('div');
    listWrapper.classList.add('list');

    if (level !== 0) {
        let backButton = createBackButton(listWrapper, parent);
        listWrapper.appendChild(backButton);
    }

    list.forEach(item => {
        let menuButton = createButton(item, listWrapper, level);
        
        listWrapper.appendChild(menuButton);
    });

    return listWrapper;
}

function createBackButton(currentList, parentList) {
    let backWrapper = document.createElement('div');
    backWrapper.classList.add('list__item');
    backWrapper.classList.add('list__item_back');
    backWrapper.innerText = '<- back';

    backWrapper.addEventListener('click', () => {
        currentList.classList.add('list_closed');
        parentList.classList.remove('list_closed');
    });
    
    currentList.classList.add('list_closed');

    return backWrapper;
}

function createButton(itemData, currentList, level) {
    let itemWrapper = document.createElement('div');
    itemWrapper.id  = getRandomId();
    itemWrapper.classList.add('list__item');
    itemWrapper.innerText = itemData.text;

    if (itemData.sub) {
        itemWrapper.classList.add('list__item_has-sub');
        let subMenu = createList(itemData.sub, ++level, itemWrapper);
        
        currentList.appendChild(subMenu);

        itemWrapper.addEventListener('click', () => {
            subMenu.classList.remove('list_closed');
        })
    }

    return itemWrapper;
}

function getRandomId() {
    return Math.random().toString(36).substr(2);
}

let root = createList(menuStructure);
menuWrapper.appendChild(root);