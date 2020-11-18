// 1.    - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// let text = document.createElement('textarea');
// document.body.appendChild(text);
// text.placeholder ='Some text';
// text.value = localStorage.getItem('text');
// text.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }


//2.Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.getElementById('form');
// getDataForm(form);

// function saveForm(t) {
//     setDataForm(t);
// }

// function setDataForm(tag) {
//    for (let i = 0; i < tag.length; i++) {
//      const tagElement = tag[i];
//      console.log(tagElement);
//      if (tagElement.type === "radio" || tagElement.type === "checkbox") 
//         tagElement.checked ? tagElement.value = true : tagElement.value = false

//      localStorage.setItem(tagElement.id, tagElement.value);
//    }
// }

// function getDataForm(tag) {
//  for (let i = 0; i < localStorage.length; i++) {
//      if (localStorage.hasOwnProperty(tag.children[i].id)) {
//       tag.children[i].value = localStorage.getItem(tag.children[i].id);
//        console.log(tag.children[i].id);
//       if (tag.children[i].value ==="true") {
//         tag.children[i].setAttribute("checked", "checked");
//       }
//      };
//     }
//}

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textArea = document.getElementById('textArea');
// let save = document.getElementById('save');
// let btnL = document.getElementById('btnL');
// let btnR = document.getElementById('btnR');

//  let index = 0
// save.onclick = () => {
//   localStorage.setItem(localStorage.length + 1, textArea.value);
//   btnL.style.display = "inline-block";
//   btnR.style.display = "inline-block";
// }


//  btnL.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textArea.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === '1') {
//         btnL.style.display = "none";
//         return;
//     }
//     textArea.value = localStorage.getItem(index - 1);
// }

// btnR.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textArea.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         btnR.style.display = "none";
//         return;
//     }
//     textArea.value = localStorage.getItem(+index + 1);
// }




// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let form = document.getElementById('formContact');
let btnSave = document.getElementById('submit');
let content = document.getElementById('content');
const arrUsers = 'ARRAY_USERS';
let tempUser = {}

btnSave.onclick = (ev) => {
    //ev.preventDefault();
    let person = {...tempUser};
    for (let i = 0; i < form.children.length; i++) { 
       const formElement = form.children[i];
    if (formElement.name && formElement.type !== 'submit') {
        person[formElement.name] = formElement.value;
    }
    }
    if (!person.id) { 
    person.id = new Date().getTime();
    }
console.log('person');
console.log(person);
saveUser(person);
}

getDataFromLocalSt();

function saveUser(user) {
    if (localStorage.hasOwnProperty(arrUsers)){
        const users = JSON.parse(localStorage.getItem(arrUsers));
       const find = users.find(x => x.id === user.id);

       if (find) { 
            const filter = users.filter(x => x.id !== user.id);
            filter.push(user);
            localStorage.setItem(arrUsers, JSON.stringify(filter));
       } else { 
            users.push(user);
            localStorage.setItem(arrUsers, JSON.stringify(users));}

    } else {
        localStorage.setItem(arrUsers, JSON.stringify([user]));
    }
}

function getDataFromLocalSt() {
    if (localStorage.hasOwnProperty(arrUsers)) {
        const arrayU = JSON.parse(localStorage.getItem(arrUsers));
        for (const item of arrayU) {
            //console.log(item);
            content.appendChild(createContactsList(item));
        }
    }
}

 function createContactsList(user) {
    let wrap = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = `${key} : ${user[key]}`;
            wrap.appendChild(h3);
            flag = false;
        } else {
           const p = document.createElement('p');
            p.innerText = `${key} : ${user[key]}`;
            wrap.appendChild(p);
        }

    }
    wrap.style = " border : 1px solid red; width : 300px; float : left";
    let del = document.createElement('button');
    let edit = document.createElement('button');
    edit.innerText = 'Edit';
    del.innerText = 'Delete';

    edit.onclick = () => editeContact(user.id);
    del.onclick = () => deleteContact(user.id);


    wrap.appendChild(edit);
    wrap.appendChild(del);    
    return wrap
 }
   
 function deleteContact(id) {
     const parse = JSON.parse(localStorage.getItem(arrUsers));
     const filter = parse.filter(x => x.id !== id);
     localStorage.setItem(arrUsers, JSON.stringify(filter));
     location.reload();
 }

 function editeContact(id) {
    const parse = JSON.parse(localStorage.getItem(arrUsers));
    const  user = parse.find(x => x.id === id);
    for (let i = 0; i < form.children.length; i++) { 
        const formElement = form.children[i];
     if (formElement.name && formElement.type !== 'submit') {
         for (const key in user) {
             if(formElement.name === key) {
                 formElement.value = user[key];
             }
         }
     }
     }
     tempUser = user;
 }
   

 

    