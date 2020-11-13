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

// let imgs= [
//     { id : 01, img_url : '478435_570720752942149_1979203720_o.jpg'},
//     { id : 02, img_url : '11696507_1102962059718013_9134864731511376241_o.jpg'},
//     { id : 03, img_url : '13569044_1333060256708191_3053758229121612863_o.jpg'},
//     { id : 01, img_url : '13754319_1349661581714725_2125466856320020351_n.jpg'},
//     { id : 01, img_url : '99441036_3453372864676909_7216575621797773312_o.jpg'}
// ];

// let photoTape = document.createElement('div');
// photoTape.setAttribute('id', 'photoTape');
// document.body.appendChild(photoTape);
// let toRight = document.createElement('button');
// toRight.setAttribute('class', 'inner');
// toRight.innerText = 'NEXT >';
// let photo = document.createElement('img')
// photo.setAttribute('id', 'img');
// photo.setAttribute('class', 'inner');
// let toLeft = document.createElement('button');
// toLeft.setAttribute('class', 'inner');
// toLeft.innerText = '< BACK';

// photoTape.appendChild(toLeft);
// photoTape.appendChild(photo);
// photoTape.appendChild(toRight);

// let index = 0;
// photo.src = imgs[index].img_url;

// toRight.onclick = () => {
//    index + 1 > imgs.length - 1 ? index = 0 : index = index + 1
//    photo.src = imgs[index].img_url
// };
// toLeft.onclick = () => {
//     index - 1 < 0 ? index = imgs.length - 1 : index = index - 1
//     photo.src = imgs[index].img_url
// }


//10.- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let swearWords = ['arse', 'ass', 'asshole', 'bastard', 'bitch', 'bollocks', 'brotherfucker', 'bugger', 'bullshit', 'damn', 'fatherfucker', 'frigger', 'fuck', 'goddamn', 'godsdamn', 'hell', 'holy shit', 'horseshit', 'motherfucker', 'nigga', 'prick', 'shit', 'shit ass', 'slut', 'son of a bitch', 'son of a whore', 'twat'];

// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'Enter text');
// let btn = document.createElement('button');
// btn.innerText = 'Send text'
// document.body.appendChild(input);
// document.body.appendChild(btn);

// btn.onclick = (el) => {
//    let answer = swearWords.some(txt =>  txt == input.value);
//      if (answer) { alert('It is forbidden to enter obscence words') }
//       else  {alert('Sent succesfully');}
//  }



 //11.- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let swearWords = ['arse', 'ass', 'asshole', 'bastard', 'bitch', 'bollocks', 'brotherfucker', 'bugger', 'bullshit', 'damn', 'fatherfucker', 'frigger', 'fuck', 'goddamn', 'godsdamn', 'hell', 'holy shit', 'horseshit', 'motherfucker', 'nigga', 'prick', 'shit', 'shit ass', 'slut', 'son of a bitch', 'son of a whore', 'twat'];

// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'Enter text');
// let btn = document.createElement('button');
// btn.innerText = 'Send text'
// document.body.appendChild(input);
// document.body.appendChild(btn);

// btn.onclick = (el) => {
// let x = [];
// swearWords.forEach( txt => {
//      let index = input.value.indexOf(txt);
//      x.push(index);
// }) 
//  x.some(txt =>  txt != -1 ) ? alert('It is forbidden to enter obscence words') : alert('Sent succesfully') ;
//   }


//12. -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let h2arr = document.getElementsByTagName('h2');

// let ul = document.createElement('ul');
// let content = document.getElementById('content');

// for (let i = 0; i < h2arr.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let yak = 'yak' + i;
//     a.href = '#' + yak;
//     h2arr[i].setAttribute('id', yak);
//     a.innerHTML = h2arr[i].innerText;
//     a.style.textDecoration = 'none';
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// let wrap = document.getElementById('wrap');
// content.style.width = '30%'
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left';


//13.-- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let container = document.getElementById('container');
let content = document.createElement('div');
container.appendChild(content);
 function displayContent(arr) {
     let index = 0;
    arr.forEach(x => {
        index++;
        let div = document.createElement('div');
        div.innerText = `${index}.  User name ${x.name} , age${x.age} , status ${x.status}. Address : city ${x.address.city} , ${x.address.street} str, ${x.address.number}. `;
        content.appendChild(div);
    })
 }


 displayContent(usersWithAddress);

 let input1 = document.createElement('input');
 let input2 = document.createElement('input');
 let input3 = document.createElement('input');
 input1.setAttribute('type', 'checkbox');
 input2.setAttribute('type', 'checkbox');
 input3.setAttribute('type', 'checkbox');
 let btn = document.createElement('button');
 let label1 = document.createElement('label');
 let label2 = document.createElement('label');
 let label3 = document.createElement('label');

 label1.innerText = 'With status false';
label2.innerText = 'Older than 29';
label3.innerText = 'live in Kyiv';
btn.innerText = 'Filter on';

container.appendChild(label1);
container.appendChild(input1);
container.appendChild(label2);
container.appendChild(input2);
container.appendChild(label3);
container.appendChild(input3);
container.appendChild(btn);

btn.onclick = (ev) => {
    let array = JSON.parse(JSON.stringify(usersWithAddress));
     
    if (input1.checked) array = array.filter(x => !x.status );
    if (input2.checked) array = array.filter(x => x.age >= 29 );
    if (input3.checked) array = array.filter(x => x.address.city === 'Kyiv');
      
    content.innerText = '';
    displayContent(array);

}

