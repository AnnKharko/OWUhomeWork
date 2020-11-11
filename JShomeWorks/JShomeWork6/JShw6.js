

// let num = [];
// for (let i = 0; i < 20; i++) {
// // num[i] = Math.floor(Math.random() * 100) ;
// num.push( Math.floor(Math.random() * 100) );
// }
// console.log(num);

// // 1.- создать массив с 20 числами.
// let xxx = [1000, 26, 99, 29, 19, 60, 48, 230, 35, 51, 58, 75, 9, 36, 30, 137, 85, 84, 70, 2];
// console.log(xxx);

// // -- при помощи метода sort и колбека  отсортировать массив.
// let asc = xxx.sort((a, b) => { return a - b});
//    console.log(asc);

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let desc = xxx.sort((a, b) => { return b - a});
// console.log(desc);

// // -- при помощи filter получить числа кратные 3
// let filt3 = xxx.filter((x) => { return x % 3 === 0});
// console.log(filt3);

// // -- при помощи filter получить числа кратные 10
// let filt10 = xxx.filter((x) => x % 10 === 0);
// console.log(filt10);

// // -- перебрать (проитерировать) массив при помощи foreach()
// xxx.forEach((x, index) => {console.log(x, index)});

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let xxxMap = xxx.map((x) => {return x * 3});
// console.log(xxxMap);



// //2. - создать массив со словами на 15-20 элементов.
// let text = ['HOME', 'Introduction', 'Where To', 'Output', 'Statements', 'Syntax', 'Comments', 'Variables', 'Operators', 'Arithmetic', 'Assignment', 'Data Types', 'Functions', 'Objects', 'Events', 'Strings', 'Numbers', 'Arrays', 'Dates', 'Math']

// // -- отсортировать его по алфавиту в восходящем порядке.
// let textAsc = text.sort();
// console.log(textAsc);

// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let textDesc = textAsc.reverse();
// console.log(textDesc);

// // -- отфильтровать слова длиной менее 4х символов
// let textFilter = text.filter(x => x.length <= 4) ;
// console.log(textFilter);

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let textMap = text.map(x => x + '!');
// console.log(textMap);

//3.Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, 
              {name: 'petya', age: 30, status: true}, 
              {name: 'kolya', age: 29, status: true}, 
              {name: 'olya', age: 28, status: false}, 
              {name: 'max', age: 30, status: true}, 
              {name: 'anya', age: 31, status: false}, 
              {name: 'oleg', age: 28, status: false}, 
              {name: 'andrey', age: 29, status: true}, 
              {name: 'masha', age: 30, status: true}, 
              {name: 'olya', age: 31, status: false}, 
              {name: 'max', age: 31, status: true} ];

// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// let userAsc = users.sort((a, b) => { return a.age - b.age});
// console.log(userAsc);

// let userDesc = users.sort((a, b) => { return b.age - a.age});
// console.log(userDesc);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let userNameAsc = users.sort((a, b) => {return a.name.length - b.name.length});
// console.log(userNameAsc);

// let userNameDesc = users.sort((a, b) => {return b.name.length - a.name.length});
// console.log(userNameDesc);

// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let clonUser = JSON.parse(JSON.stringify(users));
// let usersWithId = clonUser.map((x, index) => {x.id = "xxx" + index + 1;
// return x});
// console.log(usersWithId);
// console.log(users);

// //- відсортувати його за індентифікатором
// let descId = usersWithId.sort((a, b) => {return b.id - a.id}); 
// console.log(descId);


// //4.-- наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a, b, callback) {
//    let result =  callback(a, b);
//    return result;
// }
// let res = calculate(150, 5, function(a, b) {
//      let result = a * b + a / b;
//      return result;
// });
// console.log(res);

// //5. -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c, callback){
//     let result = callback(a, b, c);
//       return result;
// }
// let another = calculator(10, 15, 25, function(a, b, c) {
//     let res = a * b / c;
//     return res;
// })
// console.log(another);


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

let cars = [ 
 {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
 {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
 {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
 {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
 {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
 {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
 {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
 {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
 {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
 {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
 {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
 {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
 {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
 
// Відфільтрувати масив за наступними крітеріями :

// // - двигун більше 3х літрів
// let filterCar = cars.filter(x => x.volume > 3);
// console.log(filterCar);

// // - двигун = 2л
// let vol2L = cars.filter(x => x.volume === 2);
// console.log(vol2L);

// // - виробник мерс
// let merc = cars.filter(x => x.producer === 'mercedes');
// console.log(merc);

// // - двигун більше 3х літрів + виробник мерседес
// let merc3L = cars.filter(x => x.producer ='mercedes' && x.volume > 3);
// console.log(merc3L);

// // - двигун більше 3х літрів + виробник субару
// let subaru3L = cars.filter(x => x.producer = 'subaru' && x.volume > 3);
// console.log(subaru3L);

// // - сили більше ніж 300
// let power300 = cars.filter(x => x.power > 300);
// console.log(power300);

// // - сили більше ніж 300 + виробник субару 
// let subaru300 = cars.filter(x => x.producer = 'subaru' && x.power > 300);
// console.log(subaru300);

// // // - мотор серіі ej
// // let enginEej = cars.filter(x => { if (x.engine.indexOf('ej') == 0){return x}});
// // console.log(enginEej);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let subaru300ej = cars.filter(x => {
//     if (x.producer = 'subaru' && x.power > 300 && x.engine.indexOf('ej') == 0) {return x}});
// console.log(subaru300ej);

// // - двигун більше 2л + сили більше 250
// let vol2pow250 = cars.filter(x => x.volume > 2 && x.power > 250);
// console.log(vol2pow250);

// // - сили більше 250  + виробник бмв
// let bmwPow250 = cars.filter(x => x.producer = 'bmw' && x.power > 250);
// //let bmwPow250 = cars.filter(x => x.producer === 'bmw' && x.power > 250); ---- ??? чомусь виводить порожній масив
// console.log(bmwPow250);


// - взять слдующий массив
 let usersWithAddress = [
     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},    
     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
    ];

// // -- отсортировать его по id пользователей
// let usersIDasc = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersIDasc);

// // -- отсортировать его по id пользователей в обратном опрядке
// let usersIDdesc = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersIDdesc);

// // -- отсортировать его по возрасту пользователей
// let ageAsc = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(ageAsc);

// // -- отсортировать его по возрасту пользователей в обратном порядке
// let ageDesc = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(ageDesc);

// -- отсортировать его по имени пользователей
// let nameDesc = usersWithAddress.sort((a, b) => //a.name - b.name);
// {
//     if (b.name > a.name) {
//         return 1;
//     }
//     if (b.name < a.name) {
//         return -1;
//     }
//     if (b.name = a.name) {
//         return 0;
//     }
// })
// console.log(nameDesc);

// -- отсортировать его по имени пользователей в обратном порядке
// let nameAsc = usersWithAddress.sort((a, b) => //b.name - a.name);
// {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   });
// console.log(nameAsc);


// -- отсортировать его по названию улицы  в алфавитном порядке
// let streetAsc = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     if (a.address.street < b.address.street) {
//         return -1;
//     }
//     if (a.address.street = b.address.street) {
//         return 0;
//     }
// })
// console.log(streetAsc);

// -- отсортировать его по номеру дома по возрастанию
// let numberAsc = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(numberAsc);

// // -- отфильтровать (оставить) тех кто младше 30
// let yeanger30 = usersWithAddress.filter(x => x.age < 30);
// console.log(yeanger30);

// //--------------------
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusFalse = usersWithAddress.filter(x => x.status === 'false');
// console.log(statusFalse);

// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let yeanger30False = usersWithAddress.filter((x) => { if (x.age < 30 && x.status == 'false') {
//     return true;
// }});
// console.log(yeanger30False);

// ///----------------------------

// -- отфильтровать (оставить) тех у кого номер дома четный
// let numPair = usersWithAddress.filter(x => x.address.number % 2 === 0);
// console.log(numPair);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


// arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];
// console.log(arr);

//   let value = {};
//   arr.forEach(n => { value[n] ? value[n]++ : value[n] = 1 })
// console.log(value);

// let keys = Object.keys(value);
// console.log(keys);


// for (const x of keys) {
//     let minIndex = arr.indexOf(+x);
//     let maxIndex = arr.lastIndexOf(+x);
// if (minIndex != maxIndex) { 
// console.log(`key ${x} : minIndex = ${minIndex} , maxIndex = ${maxIndex}`);
// }
// else { console.log(`key ${x} : minIndex = ${minIndex} , the only one in the array`);
// }
// if (minIndex === -1 || maxIndex === -1) {
//     console.log(` key ${x} :  -1`);
// }
// }



//====================
Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

function findIndexes(arr, value){
    return arr.indexOf(value) === -1 ? -1 : `MinIndex :${arr.indexOf(value)}, MaxIndex : ${arr.lastIndexOf(value)}`;
}
console.log(findIndexes(Arr, 1));




