// // 1.- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.innerText = 'Very interesting article!';
// document.body.appendChild(div);

// let element = document.createElement('button');
// element.innerHTML = `Click here`
// document.body.appendChild(element);

// element.onclick = () => {div.style.display === 'block' ? div.style.display = 'none' : div.style.display = 'block';}

// //2.- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.setAttribute('name', 'myButton');
// button.innerText = 'Hide me';
// document.body.appendChild(button); 
// button.onclick = () => { button.style.visibility = 'hidden';}

// //3.- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// input.setAttribute('class', 'xxx');
// input.setAttribute('name', 'Enter your age')
// let buttonInInput = document.createElement('button');
// buttonInInput.setAttribute('class', 'yyy');
// buttonInInput.innerText = 'confirm your age'

// document.body.appendChild(input);
// document.body.appendChild(buttonInInput);

// buttonInInput.onclick = (event) => {
//     let age = input.value;
//     age >= 18 ? alert('All is well!') : alert('You are still a minor');
// }

// //4.- Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.createElement('div');
// menu.setAttribute('id', 'wrap');
// let ulMenu = document.createElement('ul');
// ulMenu.setAttribute('id', 'menu');

// liMain = document.createElement('li');
// aMain = document.createElement('a');
// aMain.setAttribute('href', '#');
// aMain.innerText = 'Menu item'
// liMain.appendChild(aMain) 
// ulMenu.appendChild(liMain);

// let ul = document.createElement('ul');

// for (let i = 1; i <= 5; i++) {
//     let li = document.createElement('li');
//     li.setAttribute('class', 'menu_item');
//    let a = document.createElement('a');
//    a.setAttribute('href', '#');
//    a.innerText = 'item' + i;
//    li.appendChild(a);
//     ul.appendChild(li);
// }
// liMain.appendChild(ul);
// menu.appendChild(ulMenu);
// ul.style.display ='none';
// document.body.appendChild(menu);
// ulMenu.onclick = (el) => {
//     ul.style.display === 'block' ? ul.style.display = 'none' : ul.style.display = 'block'};



//5.- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// class Coment {
//     constructor(title, body) {
//         this.title = title;
//         this.body = body;
//     }
// }
// let title = 'comentar';
// let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit itaque totam voluptatum veniam quae quaerat corrupti, sed obcaecati. Architecto id officiis vero totam minima facilis illum exercitationem. Facere, odio.';
// let coments = [];
// for (let i = 1; i <= 5; i++){
//     t = title + i;
//      let coment = new Coment(t, text);
//      coments.push(coment);
// }
// console.log(coments);

// coments.forEach(x => {
//     let divCom = document.createElement('div');
//     let span = document.createElement('span');
//     let p = document.createElement('p');
//     p.style.display === 'block';
//     btn = document.createElement('button');
//     btn.innerText = 'Hide';
//     span.innerText = x.title;    
//     p.innerText = x.body;
//     divCom.appendChild(span);
//     divCom.appendChild(p);
//     divCom.appendChild(btn);

//     document.body.appendChild(divCom);
//     btn.onclick = (el) => { p.style.display === 'none' ? p.style.display = 'block' : p.style.display = 'none'};
// })


// 6.- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let input1 = document.forms.form1.input1;
// let input2 = document.forms.form1.input2;
// let input3 = document.forms.form2.input3;
// let input4 = document.forms.form2.input4;
// let btn = document.getElementById('btn');

//  btn.onclick = (el) => {
//      let data = ` User name : ${input1.value} ${input2.value}  contacts :  e-mail ${input3.value}  phone :${input4.value} `
// console.log(data);
//  }


//7.- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function createTable(ntr, ntd, tag) {
//    let table = document.createElement('table');
//    for (let i = 1; i <= ntr; i++) {
//        let tr = document.createElement('tr');
//       tr.setAttribute('class', 'trows');
//         for (let j = 1; j <= ntd; j++) {
//             let td = document.createElement('td');
//             td.innerText = 'some data' + j ;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//    }
// tag.appendChild(table);
// }
// let div = document.createElement('div');
// div.setAttribute('id', 'divka');
// document.body.appendChild(div);
//let table = createTable(10, 5, div);



//8. - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let rows = document.createElement('input');
// rows.setAttribute('placeholder', 'number of rows')
// let cells = document.createElement('input');
// cells.setAttribute('placeholder', 'number of cells')
// let data = document.createElement('input');
// data.setAttribute('placeholder', 'some data');
// let btn = document.createElement('button');
// btn.innerText = 'Create Table';
// document.body.appendChild(rows);
// document.body.appendChild(cells);
// document.body.appendChild(data);
// document.body.appendChild(btn);
// btn.onclick = (el) => {
//  createTable(rows.value, cells.value, data.value);
// }

// function createTable(ntr, ntd, text) {
//     let table = document.createElement('table');
//     for (let i = 1; i <= ntr; i++) {
//         let tr = document.createElement('tr');
//        tr.setAttribute('class', 'trows');
//          for (let j = 1; j <= ntd; j++) {
//              let td = document.createElement('td');
//              td.innerText = text;
//              tr.appendChild(td);
//          }
//          table.appendChild(tr);
//     }
//  document.body.appendChild(table);
//  }


//9.- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let photoTape = document.createElement('div');
photoTape.setAttribute('id', 'photoTape');
document.body.appendChild(photoTape);
let toRight = document.createElement('button');
toRight.setAttribute('class', 'inner');
toRight.innerText = 'NEXT >';
let photo = document.createElement('div');
photo.setAttribute('class', 'inner');
let toLeft = document.createElement('button');
toLeft.setAttribute('class', 'inner');
toLeft.innerText = '< BACK';



photoTape.appendChild(toLeft);
photoTape.appendChild(photo);
photoTape.appendChild(toRight);


