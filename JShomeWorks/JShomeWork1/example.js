//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
  //  5 + 3,
  //  5 - 3,
  //  5 * 3,
  //  5 / 3,
  //  5 % 3
  //  поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

 /*
 let a1 =  5 + 3;
 let a2 =  5 - 3;
 let a3 =  5 * 3;
 let a4 = 5 / 3;
 let a5 =  5 % 3;
 console.log(a1);
 console.log(a2);
 console.log(a3);
 console.log(a4);
 console.log(a5);
 */

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//5 % 3,
//3 % 5,
//5 + '3',
//'5' - 3,
//75 + 'кг'

/*let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
*/ 

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height)
//шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
/*
let h = 23;
 let w = 10;
 let s = h * w;
 document.write(s);
 */

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.
/*
let heightC = 10;
let dC = 4; 
let v = Math.PI * Math.pow((dC / 2), 2 )* heightC;
document.write(v);
*/

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
/*
let m = 4;
let n = 3;
let k = Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));
document.write(k);
*/

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
/*
let str = "Hello world";
document.write(str);
alert(str);
console.log(str);
*/

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
/*
alert ("Харко Анна Володимирівна \n 27 \n Волейбол");
*/

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//Вывести в документ содержимое переменной concatenation спомощью document.write
/*
let str1 = "Кто";
let str2 = "ты";
let str3 = "такой?";
let concatenation = str1 + str2 + str3;
document.write(concatenation);
*/

//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
/*
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");
*/

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
/*
console.log(parseInt("3.14"));
console.log(parseInt("-7.875"));
console.log(parseInt("435"));
console.log(parseInt("Вася"));
*/

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже.
//let str = prompt("Enter something", "ho-ho");
//console.log(str);




//1. Три різних числа вводяться через prompt().
//За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
/*
let num1 = 5;
let num2 = 9;
let num3 = 1;

if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        console.log(num1, num2, num3)

    } else {
        console.log(num1, num3, num2)
    }
} else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        console.log(num2, num1, num3)

    } else {
        console.log(num2, num3, num1)
    }
} else if (num3 < num1 && num3 < num2) {
    if (num1 < num2) {
        console.log(num3, num1, num2)

    } else {
        console.log(num3, num2, num1)
    }
}
*/

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert.
/*
let a = prompt("Enter a number");
let b = prompt("Enter a number");
let result = parseInt(a) + parseInt(b);
alert(result);
*/

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
/*
let firstName = prompt("Enter your name.");
let lastName = prompt("Enter your last name.");
let age = prompt("How old are you?");
alert("Good evening " + firstName + lastName + "," + " congratulations that you are " + age + " years old!");
*/

