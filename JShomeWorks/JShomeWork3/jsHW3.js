//-- створити об'єкт (не меньше 5ти властивостей) який описує
//- собаку
//- людину
//- автомобіль
//- квартиру
//- книгу
/*
let dog = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};
console.log(dog);

let people = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};

let car = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};

let apartment = {
    rooms : 3,
    area : 80,
    windows : 6,
    storey : 1,
    isBalcony : true
};

let book = {
    title : "Atlas Shrugged",
    author : "Ayn Rand",
    year : 1957,
    country : "United States",
    language : "English",
    publisher : "Randome House",
    genre : [ "Philosophical fiction",
              "Science fiction",
              "Mystery fiction",
              "Romance novel",
              "Libertarian science fiction"],
     numOfPages : 1168
};



//-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів

let dog1 = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};

let dog2 = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};
let dog3 = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};

let dog4 = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};
let dog5 = {
    name : "Dina",
    age : 3,
    breed : "shepherd",
    hefl : 30,
    isVaccinated :true
};

let dogs = [dog1, dog2, dog3, dog4, dog5];
//console.log(dogs);

let people1 = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};
let people2 = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};
let people3 = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};
let people4 = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};
let people5 = {
    firstName : "Anna",
    lastName : "Kharko",
    age : 27,
    address : "Lviv",
    hasJob : false
};

let peoples = [people1, people2, people3, people4, people5];
//console.log(peoples);

let car1 = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};
let car2 = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};
let car3 = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};
let car4 = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};
let car5 = {
    brand : "Tesla",
    model : "S",
    year : 2020,
    battery : "Long Range",
    weight : "4.941 Ibs",
    seating : "5 adults",
    wheels: 19,
    drive : "All-Wheel Drive",
    topSpeed: "262 km/h"
};



//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка

let house = {
    address : {
        country : "Ukraine",
        city : "Lviv",
        str : "Kosmonavtiv",
        num : 9  },
    area : 100,
    storey : 2,
    rooms : ["kitchen", "bathroom","badroom", "living room", "anteroom", "hallway"],
    isYard : true,
    isGarden :true,
};

let driver = {
    person : {
        firstName : "Will",
        lastName : "Smith",
        age : 52,
        hasJob : true
    },
    licenseID: "594598HF",
    category: ["A", "A1", "B", "B1", "C", "C1", "D", "D1", "T" ],
    expiriance : 25,
    skill : "City driving"
};


let toy = {
    subject : "birds",
    title : "owl",
    kind : "soft toy",
    color : ["grey", "white", "pink", "blue", "yellow", "green"],
    made : {
        country : "Ukraine",
        brand : "Dimokl toys",
        address : "Lviv"
    },
    filler : "hollofiber"
};

let table = {
    kind: "Dining table",
    height: 75,
    width: 150,
    material : "wood",
    tree : ["Oak","Birch", "Beech", "Nut", "Pine"],
    made : {
        country : "Ukraine",
        brand : "Woodsoft",
        address : "Kyiv"
    },
    shape : "round",
    numoOfLegs : 1
};

let bag = {
    type : "Bag for laptop",
    color: "Black",
    material : ["polyumide", "polyurethane"],
    internalWith : "380mm",
    internalDepth :"50mm" ,
    made : {
        country : "Ukraine",
        brand : "Derby",
        address : "Kyiv"
    }
};
*/
/*
//Дан массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
console.log(users[7].status);

//- статус Максима
console.log(users[4].status);
console.log(users[10].status);

//- ім'я передостаннього об'єкту
//console.log(users[users.length- 1].name);

//- ім'я третього об'єкта
//console.log(users[2].name);

//- вік Олега
//console.log(users[6].age);

//- вік Олі
//console.log(users[3].age);
//console.log(users[9].age);

//- вік + ім'я 5го об'єкта
console.log(users[4].age + "-" + users[4].name);

//- вік + сатус Анни
console.log(users[5].age + "-" + users[5].status);
*/


//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


//- отримує текст з параграфа з id "content"

//let x = document.getElementById("content");
//console.log(x);


//- отримує текст з блоку з id "rules"

//let x = document.getElementById("rules");
//console.log(x);


//- замініть текст параграфа з id 'content' на будь-який інший

//let text = "octenweb university";
//let element = document.getElementById("content");
//element.innerText = text;


//- замініть текст параграфа з id 'rules' на будь-який інший

//let text = "Today in Histore --- 1814 Congress of Vienna opens to re-draw the European political map after the defeat of France, in the Napoleonic Wars";
//let element = document.getElementById("rules");
//element.innerText = text;


//- змініть кожному елементу колір фону на червоний

//let element = document.getElementById("rules");
//console.log(element);
//element.style.backgroundColor = "red";

//let p = document.getElementById("content");
//console.log(p);
//p.style.backgroundColor = "red";

//let ul = document.getElementsByTagName("ul");
//console.log(ul);
//ul[0].style.backgroundColor = "red";

//let li = document.getElementsByTagName("li");
//console.log(li);
//for (const x of li) {x.style.backgroundColor = "red"};



//- змініть кожному елементу колір тексту на синій

//element.style.color = "blue";
//p.style.color = "blue";
//ul[0].style.color = "blue";
//for (const x of li) {x.style.color = "blue"};


//- отримати весь список класів елемента з id=rules і вивести їх в console.log

//let rules = document.getElementById("rules")
//console.log(rules.className);


//- отримати всі елементи з класом fc_rules

//let element = document.getElementsByClassName("fc_rules");
//console.log(element);


//- поміняти колір тексту у всіх елементів fc_rules на червоний
//???????????
//for (const x of element) {
//    console.log(x);
//}


//=================
//=====class=======
//=================
//Взяти файл template_2.html та працювати в ньому
//- Напишіть код, який :

//-- змінює колір тексту елемнту з ід main_header на будь-який інший
//let head = document.getElementById("main_header");
//head.style.color = "red";

//-- робить шириниу елементу ul 400 пікселів
//let ul = document.getElementsByTagName("ul");
//ul[0].style.width = "400px";


//-- робить шириниу всіх елементів з класом linkList шириною 50%

//let links = document.getElementsByClassName('linkList');
//for (let i = 0; i < links.length; i++) {
//    links[i].style.width = "50%";
//}



//for (let i = 0; i <= links.length; i++) {} 

//-- отримує текст який зберігається в елементі з класом listElement2

//let element2 = document.getElementsByClassName('listElement2');
//let text = element2[0].textContent;
//console.log(text);


//-- отримує всі елементи li та змінює ім колір фону на сірий

//let li = document.getElementsByTagName('li');
//for (const x of li) {x.style.backgroundColor = "grey"};
//console.log(li);


//-- отримує всі елементи 'a' та додає їм клас anchor

//let a = document.getElementsByTagName("a");
//console.log(a);



//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

//let a = document.getElementsByTagName("a");
//for (const x of a) {
//    if (x.textContent === "link3") {x.style.fontSize = "40px"};
//}


//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

//let a = document.getElementsByTagName("a");
//for (const x of a) {
//    let text = x.textContent;
//    console.log(text);
//    x.classList.add('element_' + text);
//    console.log(x.classList);
//}



//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*
let sub = document.getElementsByClassName('sub-header');
console.log(sub);
let backgroundColor = prompt("Enter the color");
 for (const x of sub) {
     console.log(x);
     console.log(backgroundColor);
    
    x.style.backgroundColor = backgroundColor;
}
*/


//-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*
let sub = document.getElementsByClassName('sub-header');
console.log(sub);
let color = prompt("Enter the color");

     for (const x of sub) {
     console.log(x);
     console.log(color);
     
     x.style.color = color;
     }
*/


//-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

//let content = document.getElementsByClassName('content_1');
//console.log(content);
//let text = prompt('Enter the text');
//for (let x of content) {x.innerHTML = text;}



//-- отримати елементи p та змінити їм paddin на довільне значення
/*
let p = document.getElementsByTagName('p');
console.log(p);
let n = Math.floor(Math.random() * 100) + 1;
console.log(n);
for (let x of p) {
    x.style.padding = n + "px";
}
*/


//-- отримати елементи з класом text2 та змінити їм текст на довільне значення
/*
let t2 = document.getElementsByClassName('text2');
console.log(t2);
for (let x of t2) {
    x.innerHTML =  "it's other text!!!";
}
*/