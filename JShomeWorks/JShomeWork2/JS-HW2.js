//1. --створити масив та вивести його в консоль:
//  - з 5 числових значень
//  - з 5 стічкових значень
//  - з 5 значень стрічкового, числового та булевого типу
/*
let arrayNum = [13, 67, 46, 78, 67 ];
let arrayStr = ["Windows", "macOS", "Linux", "Android", "iOS"];
let differentTypes = ["macOS", "Catalina", "10.15.7", 2.4, true ];
console.log(arrayNum);
console.log(arrayStr);
console.log(differentTypes);
*/

// 2.-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*
let array = [];
array[0] = "first";
array[1] = "second";
array[2] = "third";
array[3] = "forth";
array[4] = "fifth";
array[5] = 6;
array[6] = 7;
array[7] = true;
array[8] = false;
array[9] = null;
array[10] = undefined;
console.log(array);
*/

//3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*
let array = ["lorem ipsum dbkbdj ngdljgdlhg ", "dfkj fgg ffdhdh d  f h gh gsh sghfgkjghj", "dkgdk gdg gdh dh dh gdjkbkjbvjdbj", "dhvfk rgrgrhdjbvld hldghsdhgghdlhglhg", "dhvfkzdfvkzdbfkzjbgkzdbgjb dhhgjhghgjhgjh", "hxgfkdzfgkdfg kdgsfkgkgfgffg", "dgfsdgfgfugfugiugiugiugiu  hdhg  gh dh dhg", "dhfgsdgfdsgh hgskdgdkgkg", "dhhfdhsgfkd  luighdzgh zhdglzhlduhg lzhguhz h", "dfkj fgg ffdhdh d  f h gh gsh sghfg"];

for (let i = 0; i <= 9; i = i + 1) {
    document.write("<div>" + array[i] + "</div>");
}
*/

//4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*
let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis adipisci eaque harum atque itaque, quaerat, corrupti tempora provident mollitia a distinctio explicabo laudantium asperiores non cum at deleniti minus?"

for (let i = 0; i <= 9; i++ ) {
    document.write("<div>" + i + "  " + str + "</div>");
}
*/

/*        ============== another way 
let array = ["lorem ipsum dbkbdj ngdljgdlhg ", "dfkj fgg ffdhdh d  f h gh gsh sghfgkjghj", "dkgdk gdg gdh dh dh gdjkbkjbvjdbj", "dhvfk rgrgrhdjbvld hldghsdhgghdlhglhg", "dhvfkzdfvkzdbfkzjbgkzdbgjb dhhgjhghgjhgjh", "hxgfkdzfgkdfg kdgsfkgkgfgffg", "dgfsdgfgfugfugiugiugiugiu  hdhg  gh dh dhg", "dhfgsdgfdsgh hgskdgdkgkg", "dhhfdhsgfkd  luighdzgh zhdglzhlduhg lzhguhz h", "lorem ipsum dbkbdj ngdljgdlhg dfkj fgg ffdhdh d  f h gh gsh sghf"];

for (let i = 0; i <= 9; i = i + 1) {
    document.write("<div>" + i + "  " + array[i] + "</div>");
}
*/


//////////////////////////////////////////////////////////////////////
//5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*
let i = 0;
let text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam tempora explicabo distinctio reprehenderit consequuntur animi ducimus amet!";

while (i <= 19) {
    document.write( "<h1>" + text + "</h1>");
    i = i++;
}
*/

//6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*
let i = 0;
let text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam tempora explicabo distinctio reprehenderit consequuntur animi ducimus amet!";

while (i <= 19) {
    document.write( "<h1>" + i + "  " + text + "</h1>");
    i = i++;
}
*/
////////////////////////////////////////////////////////////////////////

//7.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let number = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
for (i = 0; i <=9; i++ ) { console.log(number[i]);} 
*/

//8. - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*
let str = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];
 for (let i = 0; i <= 9; i++ )  { console.log(str[i]);}
 */

 //9. - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*
 let array = ["January", 31 ,true, "February", 28, "in a common year", true,  29, "in leap years", true];
 for (let i = 0; i <= 9; i++ )  { console.log(array[i]);}
*/

//10. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*
let array = ["January", 31 ,true, "February", 28, "in a common year", true,  29, "in leap years", true];

for (let i = 0; i <= 9; i++) { if (typeof(array[i]) == "boolean")
   { document.write(array[i] + "<br>");}
}
*/

//11.- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*
let array = ["January", 31 ,true, "February", 28, "in a common year", true,  29, "in leap years", true];

for (let i = 0; i <= 9; i++) { if (typeof(array[i]) == "number")
   { document.write(array[i] + "<br>");}
}
*/

//12. - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*
let array = ["January", 31 ,true, "February", 28, "in a common year", true,  29, "in leap years", true];

for (let i = 0; i <= 9; i++) { if (typeof(array[i]) == "string")
   { document.write(array[i] + "<br>");}
}
*/

//13. - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*
let array = [];
array[0] = "Monday";
array[1] = "Tueday";
array[2] = "Wednesday";
array[3] = "Thursday";
array[4] = "Friday";
array[5] = 2020;
array[6] = 10;
array[7] = true;
array[8] = false;
array[9] = null;

for (let i = 0; i <= 9; i++) {console.log(array[i]); }
*/

//14. - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//for (let i = 1; i <= 10; i++) {document.write(i); console.log(i);}


//15. - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//for (let i = 1; i <= 100; i++) {document.write(i); console.log(i);}

//16. - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*
let j = 0;
for (let i = 1; i <= 100; i = i + 2) {
    j++ ;
    document.write(j + "--" + i + "<br>"); console.log(j); 
    }
*/

//17.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*
for (let i = 1; i <= 100; i++) { 
    if (i%2 == 0) {console.log(i) , document.write(i + " ")}; 
    }
*/

//18.- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
for (let i = 1; i <= 100; i++) { 
    if (i%2 != 0) {console.log(i) , document.write(i + " ")}; 
    }
*/

//////////////////////////////////
//19. - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
/*
 for (i = 0; i <= 1; i++) {
      for (j = 1; j <= 60; j++) { document.write(j + "sec" + " ");
          if (j == 60) { document.write(i + 1 + "min" + "<br>"); }
      }
 }
 */

//20.- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/*
for (let h = 0; h <= 2; h++) {
    for (let m = 0; m <= 59; m++) {
        for (let s = 1; s <= 59; s++) { if (s == 59) {document.write( "[" + 60 + "sec" + "]" + " ");}
            if (s == 59) { document.write(m + 1 + "min" + " "); }
        }
        if (m == 59) {document.write( h + 1 + "hour" + "<br>" + "<br>");}
        if (h == 2 && m == 19) { document.write( "<b>" + h  + "hour" + " : " + "20 min" +  "</b>" + "<br>") };
    }
}
*/

 

 ////////////////////////////////////////

 //=================Додатково==========

 //1. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
 
 /*let word = "";
 let array = ["a", "b", "c"];
 for (i = 0; i <=2; i++) {word = word + array[i];}
 document.write(word);
 */

 //2.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
 /*
 let i = 0;
 let word = "";
 let array = ["a", "b", "c"];
 while (i <= 2) { word = word + array[i];
 i++ ;
}
document.write(word);
*/

//3.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*
let array = ["a", "b", "c"];
let x ;
let word = "";
for (x of array) {word = word + x;}
document.write(word);
*/

//  =================
//  =================
//  =================
//  =================

//1. - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
/*
let j = 0;
let array = ["a", "b", "c"];
for (i = 3; i <= 5; i++) {j++ , array.push(j) }
console.log(array);
*/

//2.- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
/*
let array = [1, 2, 3];
array.reverse();
console.log(array);
*/

//3.- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
/*
let array = [1, 2, 3];
array.push(4);
array.push(5);
array.push(6);
console.log(array);
*/

//4.- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
/*
let array = [1, 2, 3];
array.unshift(6);
array.unshift(5);
array.unshift(4);
console.log(array);
*/

//5. - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
/*
let array = ['js', 'css', 'jq'];
let x = array.shift();
document.write(x);
*/

//6. - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
/*
let array = ['js', 'css', 'jq'];
document.write(array.pop());
*/

//7.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
/*
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(3);
console.log(newArray);
*/

//8.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
/*
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(0,2);
console.log(newArray);
*/

//9.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
/*
let array = [1, 2, 3, 4, 5];
array.splice(1, 2);
console.log(array);
*/

//10. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*
let array = [1, 2, 3, 4, 5];
array.splice(3, 0, "a", "b", "c");
console.log(array);
*/

//11.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/*
let array = [1, 2, 3, 4, 5];
array.splice(1, 0, "a", "b");
array.splice(6, 0, "c");
array.splice(8,0, "e")
console.log(array);
*/

//12.- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*
let array = [2, 5, 7, 16, 25, 100, 0, 39, 50, 10];
for (i = 0; i <=9; i++) {if (array[i] % 2 ==0)  {console.log(array[i]);}}
*/

//13.- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
/*
let array = [2, 5, 7, 16, 25, 100, 0, 39, 50, 10];
let newArray = [];
for (i = 0; i <=9; i++) { newArray.push(array[i]);}
console.log(newArray);
*/

//14.- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/*
let array = [2, 5, 7, 16, 25, 100, 0, 39, 50, 10];
let newArray = array.slice(0);
console.log(newArray);
*/


//=============================================================================


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array = [2,17,13,6,22,31,45,66,100,-18];

//1. перебрати його циклом while
//let i =0;
//while (i <= 9) {console.log(array[i]);
//   i++;}

//2. перебрати його циклом for
//for (let i = 0; i <= 9; i++) {console.log(array[i]);}


//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let i = 0;
//while (i <=9) { if(i % 2 != 0) {console.log(array[i]);}
// i++;}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//for (let i = 0; i <= 9; i++) {
//    if (i % 2 != 0) {console.log(array[i]);}
// }
 
//5. перебрати циклом while та вивести  числа тільки парні  значення
//let i = 0;
//while (i <=9) { if(array[i] % 2 == 0) {console.log(array[i]);}
// i++;}

//6. перебрати циклом for та вивести  числа тільки парні  значення
//for (let i = 0; i <= 9; i++) {
//if (array[i] % 2 == 0) {console.log(array[i]);}
// }

//7. замінити кожне число кратне 3 на слово "okten"
//for (let i = 0; i <= 9; i++) {
//    if (array[i] % 3 == 0) {array[i] = "octen"};  }
// console.log(array);

//8. вивести масив в зворотньому порядку.
//console.log(array.reverse());



//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1:
//let i = 9;
//while (i >= 0) {console.log(array[i]);
//   i-- ;}

//2:
//for (let i = 9; i >= 0; i-- ) {console.log(array[i]);}

//3:
//let i = 9;
//while (i >= 0) { if(i % 2 != 0) {console.log(array[i]);}
// i-- ;}

//4:
//for (let i = 9; i >= 0; i-- ) {
//   if (i % 2 != 0) {console.log(array[i]);}
//    }

//5:
//let i = 9;
//while (i >= 0) { if(array[i] % 2 == 0) {console.log(array[i]);}
// i--;}


//6:
//for (let i = 9; i >= 0; i--) {
//   if (array[i] % 2 == 0) {console.log(array[i]);}
//  }

//7:
//for (let i = 0; i <= 9; i++) {
//    if (array[i] % 3 == 0) {array[i] = "octen"};  }
// console.log(array.reverse());



//10.створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
/*
let num = [];
for (let i = 0; i <= 99; i++) {
    if (i % 2 == 0) {num.push(i)};
   }
console.log(num);
*/

//- заповнити його 50 непарними числами за допомоги циклу.
/*
let num = [];
for (let i = 0; i <= 99; i++) {
    if (i % 2 != 0) {num.push(i)};
   }
console.log(num);
*/

//===============
//1.створити пустий масив та :
// используя Math.random заполнить массив из ???(сколько хотите) элементов.
/*
let num = [];
for (let i = 0; i <= 4; i++) {
    num.push(Math.random());
}
console.log(num);
*/

let num = [];
for (let i = 0; i <= 10; i++) {
    num.push( Math.floor(Math.random() * 100) );
}
//console.log(num);

//2. вывести на консоль  каждый третий елемент
//for (let i = 2; i <= 10; i = i + 3)  {console.log(num[i]);} 

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
//for (let i = 2; i <= 10; i = i + 3)  { if (num[i] % 2 == 0) {console.log(num[i]);} }

// 4. вывести на консоль  каждый третий елемент
//но при условии что он имеет парное значение и
// записать их в другой массив.
/*
let num1 = [];
for (let i = 2; i <= 10; i = i + 3)  { 
    if (num[i] % 2 == 0) {num1.push(num[i]);} 
   }
   console.log(num1);
*/

//5. Вывести каждый елемент массива у которого соседний с права элемент - парный
/*
for (let i = 0; i <= 10; i++) {
    if (num[i + 1] % 2 == 0) { console.log(num[i]);}
}
*/


//---------------
//  масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
/*
let check = [100,250,50,168,120,345,188];
let s = 0;
for (let i = 0; i <= 6; i++) {s = s + check[i]};
console.log(s / 7);
*/


// створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let rand = [];
for (let i = 0; i <= 10; i++) {
    rand.push( Math.floor(Math.random() * 10) );
}
console.log(rand);
let a = [];
for (let i = 0; i <= 10; i++) {a.push(rand[i] * 5);}
console.log(a);
*/


//створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
/*
let m = ["January", 31 ,true, "February", 28, "in a common year", true,  29, "in leap years", true];
let n = [];
for (let i = 0; i <= 9; i++) {
    if (typeof(m[i]) == "number") {n.push(m[i]);}
}
console.log(n);
*/
