let rootNode = document.getElementById('root');
let footer = document.createElement('footer');
let main = document.createElement('main');

rootNode.appendChild(footer);
rootNode.insertBefore(main, footer);

let plusItem = document.getElementById('plus');
plusItem.addEventListener('click', addListItem);



let logoImg = document.createElement('img');
logoImg.setAttribute('src', 'assets/img/cat.png');
logoImg.setAttribute('id', 'img');
logoImg.setAttribute('alt', 'paw');
footer.appendChild(logoImg);
let input = document.getElementById('input');
let maxItem = 10;

function addListItem() {

    if(input.value.trim()) {
        let itemBox = main.appendChild(document.createElement('div'));
        itemBox.setAttribute('class', 'itemBox');
        itemBox.setAttribute('draggable', 'true');
        let taskBox = itemBox.appendChild(document.createElement('div'));
        taskBox.setAttribute('class', 'taskBox');
        insertCheckbox(taskBox);
        insertLabel(taskBox);
        insertDelImg(itemBox);
        input.value = '';
    }

    if (main.childNodes.length >= maxItem) {
        let message = document.createElement('p');
        message.innerHTML = 'Maximum item per list are created';
        let title = document.querySelector('h1');
        let header = document.querySelector('header');
        header.insertBefore(message, title);
        disable(input);
        disable(plusItem);
    }
}


function insertCheckbox(parentEl) {
    let button = document.createElement('button');

    let checkBtn = document.createElement('i');
    checkBtn.setAttribute('class', 'material-icons');
    checkBtn.appendChild(document.createTextNode('check_box_outline_blank'));
    checkBtn.addEventListener('click', checkedItem);

    checkBtn.classList.add('checkBox');

    parentEl.appendChild(button);
    button.appendChild(checkBtn);
}

function insertLabel(parentEl) {
    let label = document.createElement('span');
    label.appendChild(document.createTextNode(input.value));
    parentEl.appendChild(label);

}

function insertDelImg(parentEl) {
    let del = document.createElement('i');
    del.setAttribute('class', 'material-icons' );
    del.classList.add('deleteIcons');
    del.addEventListener('click', deleteListItem);
    del.appendChild(document.createTextNode('delete'));
    parentEl.appendChild(del);
}

function deleteListItem() {
    this.parentNode.remove();
    if (main.childNodes.length < maxItem) {
        let message = document.querySelector('p');
        message.textContent = '';
        enable(input);
        enable(plusItem);
    }
}

function checkedItem () {
    this.textContent = 'check_box';
}

function disable(elem) {
    elem.setAttribute('disabled', 'disabled');
}

function enable(elem) {
    elem.removeAttribute('disabled');
}
