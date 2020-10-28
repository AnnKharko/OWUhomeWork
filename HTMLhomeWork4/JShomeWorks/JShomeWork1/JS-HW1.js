//1.присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write 

/* greeting = "hello";
 name = "owu";
 web = "com";
 country = "ua";
 a = 1;
 b = 10;
 c = -999;
 d = 123;
 pi = 3.14;
 e = 2.7;
 f = 16;
 yes = true;
 no = false;

console.log(greeting);
console.log(name);
console.log(web);
console.log(country);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(pi);
console.log(e);
console.log(f);
console.log(yes);
console.log(no);

alert (greeting);
alert(name);
alert(web);
alert(country);
alert(a);
alert(b);
alert(c);
alert(d);
alert(pi);
alert(e);
alert(f);
alert(yes);
alert(no);

document.write(greeting);
document.write(name);
document.write(web);
document.write(country);
document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(pi);
document.write(e);
document.write(f);
document.write(yes);
document.write(no);
*/


//2.- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
/*
 greeting = "hi";
 name = "octen";
 web = "edu";
 country = "Ukraine";
 a = 3;
 b = 130;
 c = -1;
 d = 123456;
 pi = 3.14159;
 e = 2.71828;
 f = 1645;
 yes = false;
 no = "stop";

 console.log(greeting);
console.log(name);
console.log(web);
console.log(country);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(pi);
console.log(e);
console.log(f);
console.log(yes);
console.log(no);

alert (greeting);
alert(name);
alert(web);
alert(country);
alert(a);
alert(b);
alert(c);
alert(d);
alert(pi);
alert(e);
alert(f);
alert(yes);
alert(no);

document.write(greeting);
document.write(name);
document.write(web);
document.write(country);
document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(pi);
document.write(e);
document.write(f);
document.write(yes);
document.write(no);
*/

//3. Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
/*
let x = 1;
let y = 2;
let z = 3;
let a = "Hi";
let b = "everyone" ;
let c = "! :)" ;

console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);
console.log(z);

alert(a);
alert(b);
alert(c);
alert(x);
alert(y);
alert(z);

document.write(a);
document.write(b);
document.write(c);
document.write(x);
document.write(y);
document.write(z);
*/

//4. - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
/*
let firstName = prompt("What is your name?");
let lastName = prompt("What is your surname?");
let patronymic = prompt("What is your patronymic?");

console.log(firstName);
console.log(lastName);
console.log(patronymic);

alert(firstName);
alert(lastName);
alert(patronymic);

document.write(firstName);
document.write(lastName);
document.write(patronymic);
*/

//5. - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
/*
let firstName = prompt("What is your name?");
let lastName = prompt("What is your surname?");
let patronymic = prompt("What is your patronymic?");

let person = firstName + " " + lastName + " " + patronymic;
console.log(person);
*/

//6. - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
/*
let firstName1 = prompt("What is your husbend's name?");
let lastName1 = prompt("What is your husbend's surname?");
let patronymic1 = prompt("What is your husbend's patronymic?");

let husbend = lastName1 + " " + firstName1 + " " +  patronymic1;
console.log(husbend);

let firstName2 = prompt("What is your baby's name?");
let lastName2 = prompt("What is your baby's surname?");
let patronymic2 = prompt("What is your baby's patronymic?");

let baby = lastName2 + " " + firstName2 + " " + patronymic2;
console.log(baby);

let firstName3 = prompt("What is your mother's name?");
let lastName3 = prompt("What is your mother's surname?");
let patronymic3 = prompt("What is your mother's patronymic?");

let mother = lastName3 + " " + firstName3 + " " + patronymic3;
console.log(mother);

let firstName4 = prompt("What is your father's name?");
let lastName4 = prompt("What is your father's surname?");
let patronymic4 = prompt("What is your father's patronymic?");

let father = lastName4 + " " + firstName4 + " " + patronymic4;
console.log(father);

let firstName5 = prompt("What is your sister's name?");
let lastName5 = prompt("What is your sister's surname?");
let patronymic5 = prompt("What is your sister's patronymic?");

let sister = lastName5 + " " + firstName5 + " " + patronymic5;
console.log(sister);

let firstName6 = prompt("What is your sister's name?");
let lastName6 = prompt("What is your sister's surname?");
let patronymic6 = prompt("What is your sister's patronymic?");

let youngerSister = lastName6 + " " + firstName6 + " " + patronymic6;
console.log(youngerSister);
*/


//7. - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
/*
let a = prompt("Enter a number");
let b = prompt("Enter a number");
let c = prompt("Enter a number");


let x = + a;
let y = + b;
let z = + c;
let w = x + y + z ;
console.log(w);
console.log(typeof(z));
*/


//8. - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let a = prompt("Enter a number");
let b = prompt("Enter a number");
let c = prompt("Enter a number");
let d = prompt("Enter a number");

let result = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
console.log(result);
console.log(typeof(result));
*/

//9. - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let a = prompt("Enter a floating point number");
let b = prompt("Enter a floating point number");
let c = prompt("Enter a floating point number");

let result = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log(result);
*/

//10. - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
/*
let a = prompt("Enter a floating point number");
let b = prompt("Enter a floating point number");
let c = prompt("Enter a floating point number");

let result = Math.round(a) + Math.round(b) + Math.round(c);
console.log(result);
*/

//11. - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
/*
let x = prompt("Enter the number to be increased to the power");
let y = prompt("Enter the power to which you want to raise the number");

let result = Math.pow(x,y);
console.log(result);
*/

// 12.- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
/*
let a = 100; 
let b = '100';
let c = true;
let d = undefined;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
*/

//13.  Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
/*
let a = (5 < 6);
let b = (5 > 6);
let c = (5 >= 6);
let d = (5 == 6)
let e = (10 == 10);
let f = (10 === 10);
let g = (10 > 10);
let h = (10 < 10);
let i = (10 != 10);
let j = (123 === "123");
let k = (123 == "123");
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
 console.log(e);
 console.log(f);
 console.log(g);
 console.log(h);
 console.log(i);
 console.log(j);
 console.log(k);
*/

//Дополнительно:
//- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
/*
console.log(132 > 100 && 45 < 12 );                              ----------- false
console.log(34 > 33 && 23 < 90 );                                 ---------- true
console.log(99 > 100 && 45 > 12 );                                 --------- false
console.log(132 > 100 || 45 < 12 );                                  ------- true
console.log(111 > 11 || 45 < 111 );                                   ------ true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );        ----- false
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );          ---- true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );        --- false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));            -- true
console.log(!!'-1');                                                  ------ true
console.log(!!-1);                                                    ------ true
console.log(!!'0');                                                   ------ true
console.log(!!'null');                                                ------ true
console.log(!!'undefined');                                           ------ true
console.log(!!(3/'owu'));                                             ------ false
console.log((111 > 11 || 45 < 111) ||  !!'0');                           --- true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));      --- false
*/

 // =====================
 //======ДОП============
 // =====================

 // 1. 1. Три різних числа вводяться через prompt().
 //За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
/*
let a = prompt("Enter a number");
let b = prompt("Enter a number");
let c = prompt("Enter a number");
let first;
let second;
let last;
let next;
let next1;

if ((a > b) && (a > c) )  { first = a, next = b, next1 = c;} 
else  if ((b > a) && (b > c)) { first = b, next = a, next1 = c;} 
     else { first = c, next = a, next1 = b; } 
     console.log(first);

if (next > next1) {second = next, last = next1;}
else { second = next1, last = next;}
console.log(first + second +last);
*/

//2.
//Все параматры получаем с клавиатуры!!!!
//Имитируем поведение пешехода на перекстке.
//Если светофор зеленый - вывести "иди".
//Если светофор желтый - вывести "подожди".
//Если светофор красный - вывести "стой".
//Если светофор в аварийном режиме вывести "делай что хочешь"!

/*
let color = prompt("Введите цвет светофора");
switch (color ) {
 case ("зеленый") : 
 document.write("иди!");
 break;
 case ("желтый") : 
 document.write("подожди!");
 break;
 case ("красный") : 
 document.write("стой!");
 break;
 default :
 document.write("делай что хочешь!");
}
*/

//3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//Улучшаем предыдущее задание.
//Если светофор зеленый и машин нет - вывести "иди".
//Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//Если светофор желтый и машины есть - вывести "жди".
//Если светофор желтый и машин нет - вывести "все рано жди".
//Если светофор красный и машин нет- вывести "стой все рано".
//Если светофор красный - и машины есть вывести "стой и жди".
/*
let color = prompt("Введите цвет светофора");
let isRoadClear = confirm("машины на дороге есть?");
 if ( color == "зеленый" && isRoadClear == false ) {document.write("иди!");
 } else if ( color == "зеленый" && isRoadClear == true) {document.write("подожди пока нарушители проедут");
 } else if ( color == "желтый"  && isRoadClear == false) {document.write("все равно жди!");
 } else if ( color == "желтый" && isRoadClear == true) {document.write("жди!");
 } else if ( color == "красный" && isRoadClear == false) {document.write("стой все рано!");
 } else if ( color == "красный" && isRoadClear == true) {document.write("стой и жди!");}

 */
