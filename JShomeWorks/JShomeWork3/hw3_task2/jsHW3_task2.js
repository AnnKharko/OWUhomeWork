//1.- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
/*
let flowers = {
    kind : "rose",
    color : "pink",
    lifeTime : 10,
    height : "1.2 m",
    instock : true
};

let xwindow = {
    material : "metal-plastic",
    profile : "WDS",
    height : 120,
    width : 120,
    company : "MicroPlast",
    price : 3000
};

let bicycle = {
    type : "electric", 
    title : "Specialized Turbo",
    producer : "Creo SL E5 Comp",
    size : "mediym",
    battery : "Specialized SL1-320"
};

let laptop = {
    model : "Asus ROG Strix G15 G512LI-HN094",
    id : "90NR0381-M01620",
    screen : " 15.6\" IPS (1920x1080) Full HD " ,
    RAM : "8 GB ",
    SSD : "512 GB"
};

let cat = {
    name : "garfild",
    breed : "Persian cat",
    color : "orange",
    age : 1,
    vacinated: true
};
*/
//2.- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
/*
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

let pillow = {
    color : "white" , 
    filler : ["hollofiber", "cotton", "fluff"],
    producer : {
        companyName : "Alfa",
        country : "Italy",
    },
    size : "60 x 30"
};

let pen = {
    code : "2893573fh",
    color : ['black', 'blue', 'violet'],
    seller : {
        shop : "XXX",
        department : "stationery"
    }
};

let coffee = {
    type : "organic",
    composition : "100% Arabica" ,
    roasting : {
        average : "American or regular",
        mediumDark : "Viennese" 
     },
    weight : [340, 200, 500]
};

let wine = {
    kind : ["white", "sparcling", "pink", "red dessert", "red chairs" ],
     indicator : {
        tartness : "n",
        strength : "m",
        shugerContent : "16%"
    },
    metodOfManufacture : "Assembly",
    Vintage : false
};
*/


//3.- При помощи for in вывести все ключи всех объектов из задания 1 и 2
/*
for (const x in flowers) {console.log(x);}
for (const x in xwindow) {console.log(x);}
for (const x in bicycle) {console.log(x);}
for (const x in laptop) {console.log(x);}
for (const x in cat) {console.log(x);}
for (const x in toy) {console.log(x);}
for (const x in pillow) {console.log(x);}
for (const x in pen) {console.log(x);}
for (const x in coffee) {console.log(x);}
for (const x in wine) {console.log(x);}
*/

//4.- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
/*
console.log(Object.keys(flowers));
console.log(Object.keys(xwindow));
console.log(Object.keys(bicycle));
console.log(Object.keys(laptop));
console.log(Object.keys(cat));
console.log(Object.keys(toy));
console.log(Object.keys(pillow));
console.log(Object.keys(pen));
console.log(Object.keys(coffee));
console.log(Object.keys(wine));

*/
//5.- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

/*
let opel = {
    model : "Q7",
    year : 2012,
    power : 3.2,
    color : "white"
};

let mercedes= {
    model : "Vito",
    year : 2010,
    power : 2.5,
    color : "white"
};

let chevrolet = {
    model : "Cryze",
    year : 2014,
    power : 1.7,
    color : "white"
}

let volkswagen = {
    model : "Caddy",
    year : 2014,
    power : 1.6,
    color : "grey"
};

let renault = {
    model : "Sandero",
    year : 2014,
    power : 1.4,
    color : "green"
};

let mecedes2 = {
    model : "EQC",
    year : 2018,
    power : 2.6,
    color : "grey"
};

let lexus = {
    model : "ES-350",
    year : 2020,
    power : 2.5,
    color : "black"
};

let opel2 = {
    model : "Vivaro",
    year : 2010,
    power : 1.9,
    color : "black"
};

let chewrolet2 = {
    model : "Camaro",
    year : 2019,
    power : 2.0,
    color : "white"
};

let opel3 = {
    model : "Camaro ZL1 MT 6,2 AT",
    year : 2020,
    power : 6.2,
    color : "white"
};

let cars = [opel, mercedes, chevrolet, volkswagen, renault, mecedes2, lexus, opel2, chewrolet2, opel3];
console.log(cars);
*/

//6.- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
/*
let city1 = {
    name : "Lviv",
    population : 3979.5,
    country : "Ukraine",
    region :  "Lviv oblast",
};

let city2 = {
    name : "Kyiv",
    population : 35295.74,
    country : "Ukraine",
    region :  "Kyiv oblast",
};

let city3 = {
    name : "Tallinn",
    population : 2506.9,
    country : "Estonia",
    region :  "Harju",
};

let city4 = {
    name : "Kyiv",
    population : 35295.74,
    country : "Ukraine",
    region :  "Kyiv oblast",
};

let city5 = {
    name : "Helsinki",
    population : 3070.08,
    country : "Finland",
    region : "Uusimaa",
};

let cities = ["city1", "city2", "city3", "city4", "city5"];
*/

//7.- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/*
let car1 = {
    model : "Camaro ZL1 MT 6,2 AT",
    year : 2020,
    power : 6.2,
    color : "white",
    driver : {
        name : "Will",
        age : 30,
        sex : "male",
        expiriance : 10
    }
};

let car2 = {
    model : "Camaro ZL1 MT 6,2 AT",
    year : 2020,
    power : 6.2,
    color : "white",
    driver : {
        name : "Will",
        age : 30,
        sex : "male",
        expiriance : 10
    }
};

let car3 = {
    model : "Camaro ZL1 MT 6,2 AT",
    year : 2020,
    power : 6.2,
    color : "white",
    driver : {
        name : "Will",
        age : 30,
        sex : "male",
        expiriance : 10
    }
};

let vehicle = [car1, car2, car3];
console.log(cars);
*/

//8.- проитерировать каждый массив из задания 5,6,7 при помощи while.

//let i = 0;
//while (i < cars.length ) {
//    console.log(cars[i]);
//    i++;
//}

//let i = 0;
//while (i < cities.length ) {
//    console.log(cities[i]);
//    i++;
//};

//let i = 0;
//while (i < vehicle.length ) {
//   console.log(vehicle[i]);
//    i++;
//}


//9.- проитерировать каждый массив из задания 5,6,7 при помощи for .
/*
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

for (let i = 0; i < vehicle.length; i++) {
    console.log(vehicle[i]);
}

*/

//10.- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*
for (const x of cars) {
    console.log(x);
}

for (const x of cities) {
    console.log(x);
}

for (const x of vehicle) {
    console.log(x);
}
*/

//11.- взять объекты из задания 1 и превратить каждый в json.

//let s = JSON.stringify(cars);
//console.log(s);

//let c = JSON.stringify(cities);
//console.log(c);

//let v = JSON.stringify(vehicle);
//console.log(v);


//12.- взять json из задания 11 и превратить их обратно в объекты.

//let ss = JSON.parse(s);
//console.log(ss);

//let cc = JSON.parse(c);
//console.log(cc);

//let vv = JSON.parse(v);
//console.log(vv);

//13.- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*
for (const x of cars) {
    console.log(JSON.stringify(x));
}
*/
//14.- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
/*
for (const x of cities) {
    console.log( JSON.stringify(x) );
}
*/
//15.- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
/*
let veh = [];
for ( const x of vehicle) {
    veh.push(JSON.stringify(x));
}
console.log(veh);
*/

//17.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
/*
  let  user1 = {
        firstName : "Will",
        lastName : "Smith",
        age : 52,
        hasJob : true,
        skills : ["js", "HTML", "CSS", "Github"]
    };

    let  user2 = {
        firstName : "Will1",
        lastName : "Smith1",
        age : 52,
        hasJob : true,
        skills : ["js", "HTML", "CSS", "Github"]
    };

    let  user3 = {
        firstName : "Will2",
        lastName : "Smith2",
        age : 52,
        hasJob : true,
        skills : ["js", "HTML", "CSS", "Github"]
    };

    let  user4 = {
        firstName : "Will3",
        lastName : "Smith3",
        age : 52,
        hasJob : true,
        skills : ["js", "HTML", "CSS", "Github"]
    };

    let  user5= {
        firstName : "Will4",
        lastName : "Smith4",
        age : 52,
        hasJob : true,
        skills : ["js", "HTML", "CSS", "Github"]
    };

    let users = [user1, user2, user3, user4, user5];
    
   
    
    for (let user of users) {
        for (const skill of user.skills) { 
                console.log(skill);
            }
     };
    
*/

//18.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

//let userSkill = [];
//for (let user of users) {
//  for (const skill of user.skills) { 
//            userSkill.push(skill);
 //       }
// };
// console.log(userSkill);




//19.- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/*
let users = [
     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
      {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
      {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for (const user of users) {
    console.log(user);
    for (const skill of user.skills) {
        console.log(skill);
    }
}

*/



//20.- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

/*
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
*/

//let empty = [];
//for (const user of users){
//    empty.push(user.address);
//}
//console.log(empty);


//21.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = 'grey';
    userDiv.style.margin = '20px';

    userDiv.innerHTML = 'user' + ' - ' + user.name + '<br>' + user.age + ' ' + user.status + '<br>'  +
    'address : ' + user.address.city + '  ' + user.address.country + '  ' + user.address.street + '  ' + user.address.houseNumber ;
    
    document.body.appendChild(userDiv);
}
*/

//22.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

/*
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = 'grey';
    userDiv.style.margin = '20px';
    
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('forDiv');
    nameDiv.innerText = user.name;

    const ageDiv = document.createElement('div');
    ageDiv.classList.add('forDiv');
    ageDiv.innerText = user.age;

    const statusDiv = document.createElement('div');
    statusDiv.classList.add('forDiv');
    statusDiv.innerText = user.status;

   
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('forDiv');
    addressDiv.innerHTML = 'address : ' + user.address.country + '<br>'  + user.address.city + '<br>'  + user.address.street + '  ' + user.address.houseNumber ;

    document.body.appendChild(userDiv);
    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);

}
*/


//23.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = 'grey';
    userDiv.style.margin = '20px';
    
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('forDiv');
    nameDiv.innerText = user.name;

    const ageDiv = document.createElement('div');
    ageDiv.classList.add('forDiv');
    ageDiv.innerText = user.age;

    const statusDiv = document.createElement('div');
    statusDiv.classList.add('forDiv');
    statusDiv.innerText = user.status;

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('forDiv');
     
    for (const adr in user.address) {
        const div = document.createElement('div');
        div.innerText = user.address[adr];
        addressDiv.appendChild(div);
    }

    document.body.appendChild(userDiv);
    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);

}
*/

//24.- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false}, 
    {id: 2, name: 'petya', age: 30, status: true}, 
    {id: 3, name: 'kolya', age: 29, status: true}, 
    {id: 4, name: 'olya', age: 28, status: false},
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
];
*/

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

/*
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
                user.address = city;  
        }
    }
} 
console.log(usersWithId);
*/

//25.- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//---------
//let block = document.createElement('div');
//block.classList.add("new");

//block.innerText = "some text in this block";
//document.body.appendChild(block);
//-----------
//let textId = document.getElementById('new');
//let text = textId.innerText
//console.log(text);

//let textClass = document.getElementsByClassName('some');
//for (let i = 0; i <= textClass.length; i++) {
//    console.log(textClass[i]);
//}

//for (const x of textClass ) {
//    console.log(x);
//}


//let textTagName = document.getElementsByTagName('p');
// for (const x of textTagName) {
//     console.log(x);
// }

//26.- змінити цей текст використовуючи селектори id, class,  tag

//let textId = document.getElementById('new');
//textId.innerText = "some new text";

//let textClass = document.getElementsByClassName('some');
//for (const x of textClass) {
//    x.innerText = "something else";
//}

//let textTagName = document.getElementsByTagName('p');
//for (const x of textTagName) {
//    x.innerText = "something new";
//}

//27.- змінити висоту та ширину блоку використовуючи селектори id, class,  tag

//let textId = document.getElementById('new');
//textId.style.height = "100px";
//textId.style.width = "500px";

//let textClass = document.getElementsByClassName('some');
//for (const x of textClass) {
//    x.style.height = "100px";
//    x.style.width = "500px";
//}

//let textTagName = document.getElementsByTagName('p');
// for (const x of textTagName) {
//    x.style.height = "100px";
//    x.style.width = "300px";
//}


//28.- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
/*
let table = document.createElement('table');
table.style.border = "1px solid black";
table.style.width = "400px";
 
for (let i = 1; i <= 3; i++) {
    let th = document.createElement('th');
    th.style.border = "1px solid black";
    th.innerText = "title" + i;
    
    table.appendChild(th);
}
document.body.appendChild(table);
*/

//29.- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
/*
let table = document.createElement('table');
table.style.border = "1px solid black";
table.style.width = "700px";
table.style.height = "500px";

 
for (let i = 1; i <= 10; i++) {
    let tr = document.createElement('tr');
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td')
        td.style.border = '1px solid black';
        tr.appendChild(td);
    }
   table.appendChild(tr);
}    
document.body.appendChild(table);
*/

//30.- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
/*
let table = document.createElement('table');
table.classList.add('forTable');

for (let i = 1; i <= 10; i++) {
    let tr = document.createElement('tr');
    for (let i = 1; i <= 5; i++) {
        let td = document.createElement('td')
        td.style.border = '1px solid black';
        tr.appendChild(td);
    }
   table.appendChild(tr);
}    
document.body.appendChild(table);
*/

//31.- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
/*
let n = prompt('Enter the number of rows');
let m = prompt('Enter the number of cells');

let table = document.createElement('table');
table.classList.add('forTable');

for (let i = 1; i <= n; i++) {
    let tr = document.createElement('tr');
    for (let i = 1; i <= m; i++) {
        let td = document.createElement('td')
        td.style.border = '1px solid black';
        tr.appendChild(td);
    }
   table.appendChild(tr);
}    
document.body.appendChild(table);
*/

//32. --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//- знайти всі елементі, які мають class

//let allElements = document.getElementsByTagName('*');
//console.log(allElements);

//let allElemenByClass = document.getElementsByTagName('*');
// for ( const tag of allElemenByClass) {
//     if (tag.getAttribute('class')) {
//         console.log(tag);
//    }
// };

 
 // - знайти всі параграфи ,та змінити текст на hello oktenweb!


 //let allP = document.getElementsByTagName('p');
 // for (const x of allP) {
 //    x.innerText = "hello oktenweb!";
 // }


 // - знайти всі div та змінити ім колір на червоний

//let allDiv = document.getElementsByTagName('div');
////console.log(allDiv);
//for (const x of allDiv) {
//    x.style.backgroundColor = 'red';
//}


//============
//====class===
//===========


//1.- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
/*
let allTittle = document.getElementsByTagName('h2');
let content = document.getElementById('content') ;

let ul = document.createElement('ul');
for (const x of allTittle) {
     let li = document.createElement('li');
     li.innerText = x.innerText;
     ul.appendChild(li);
}
content.appendChild(ul);
*/

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

 
let wrap = document.createElement('div');
wrap.id = 'wrap';

for (let  i = 0; i <= rules.length; i++) {
    const rule = rules[i];
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    div.className = `rules rule${i+1}s`;
     //??? h2.innerText = rule.title;
   //???? p.innerText = rules[i].body;
    
    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);
}

document.body.appendChild(wrap);

*/