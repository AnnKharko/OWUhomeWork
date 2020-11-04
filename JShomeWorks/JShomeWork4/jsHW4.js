//1.- створити функцію яка виводить масив
/*
let num = ["first", "second", "third"];

function displayArray(array) {
   console.log(array);
   document.write(array);
};
console.log(displayArray(num)); 
*/

//2.- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
/*
function createArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    console.log(array);
}

let n = prompt( 'Enter the number of elements in the array');
createArray(n);
*/

//3.- створити функцію яка приймає три числа та виводить та повертає найменьше.
/*
let minValue = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {return num1;}
    else if (num2 < num1 && num2 < num3) {
        return num2; }
    return num3;
}
let n1 = prompt('Enter the number');
let n2 = prompt('Enter the number');
let n3 = prompt('Enter the number');

let min = minValue(n1, n2, n3);
console.log(min);
*/

//4.- створити функцію яка приймає три числа та виводить та повертає найбільше.
/*
let maxValue = (num1, num2, num3) => {
    (num1 > num2 && num1 > num3) ? console.log(num1) : 
    (num2 > num1 && num2 > num3) ? console.log(num2) : 
    console.log(num3); 
};

let n1 = prompt('Enter the number');
let n2 = prompt('Enter the number');
let n3 = prompt('Enter the number');

let max = maxValue(n1, n2, n3);
*/

//5.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
/*
function minMax() {
    let arg = arguments;
    //return Math.max.apply(null, arg);
    console.log(Math.max.apply(null, arg));
    return Math.min.apply(null, arg);

}
let x = minMax(7, 5, 8, 3, 1, 6);
document.write(x);
*/

//6.- створити функцію яка виводить масив

//let displayArray = array =>  {console.log(array); document.write(array)};

//let days = ['Monday', 'Tuesday', 'Wednesdey', 'Thursday', 'Friday'];
//displayArray(days);


//7.- створити функцію яка повертає найбільше число з масиву

//let maxNum = array => Math.max.apply(null, array);

//let nums = [ 15, 57, 28, 10, 95, 1, 100];
//console.log(maxNum(nums));


//8. - створити функцію яка повертає найменьше число з масиву

//let minNum = array => Math.min.apply(null, array);

//let nums = [ 15, 57, 28, 10, 95, 1, 100];
//console.log(minNum(nums));

//9. - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
/*
let sumArr = array => {
    let sum = 0; 
    for ( const x of array) { sum = sum + x};
    return sum;
};
let nums = [ 15, 57, 28, 10, 95, 1, 100];
console.log( sumArr(nums));
*/

//10.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
let avrg = (array) => {
    let sum = 0; 
    let n = 0;
    for ( const x of array) { sum = sum + x ;
    n++};
    return sum / n
};
   
 let numbers = [1, 2, 3, 4, 5];
 let average = avrg(numbers);
 console.log(average);
*/


//11.- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
 /*
let amount = (array) => { 
    let n = 0;
    for ( const x of array) {
    n++};
    console.log(n);
    return n
    };

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
//let num = amount(dogs);
*/

//12.- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
/*
let amountFields = (array) => { 
    let nField = 0
    for ( const elem of array) {
        for (field in elem) {
            nField++ ;
        }
    };
    console.log(nField);
    return nField
    };

let xxx = amountFields(dogs)
*/


//13.- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  Приклад
//  [1,2,3,4]
//  [2,3,4,5]
//  результат
//  [3,5,7,9]
 
/*
function sumValue(array1, array2) {
    let n = 0;
    for (const x of array1) {
        n++;
    }
    console.log(n);
    let arrSum = [];
    for(let i = 0; i < n; i++) {
        
        for(let j = 0; j < n; j++) {
            if (i === j) {
                console.log(array1[i]);
                console.log(array2[j]);
                arrSum.push(array1[i] + array2[j]);
             }
        }
    }
    console.log(arrSum); 
    return arrSum  ;  
}

let x = [1,2,3,4];
let y = [2,3,4,5];
let result = sumValue(x, y);
*/

//14.- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/*
function change(array, i) {
    
     for (let j = 0; j < array.lenght; j++) {
         if (j === i) {
             let x = array[j];
             array[j] = array[j+1];
            array[j+1] = x;
        }
     }
     console.log(array);
}
let arr = [1, 2, 3, 4, 5];
change(arr, 0);
*/

//15.- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

/*
function zeroElemAtEnd(arr) {
        for (let item of arr) {
            if (item === 0) {
                arr.splice(arr.indexOf(item), 1)
                arr.push(item)
            }
        }
        console.log(arr); 
    }
    
let num = [1,0,6,0,3];
zeroElemAtEnd(num);
let num2 = [0, 6, 0, 1,0,0];
zeroElemAtEnd(num2);
let numx = [0, 0, 0, 8, 6, 0, 3, 0]; 
zeroElemAtEnd(numx);
*/

//16.Створити функцію яка :

//1.- Додає в боді блок з текстом "Hello owu"

//function addDivInBody() {
//    let div = document.createElement('div');
//    div.innerText = "Hello owu";
//    document.body.appendChild(div);
//}
//addDivInBody();


//2.- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

//function addSomeElementInBody(tagName, text) {
//        let element = document.createElement(tagName);
//        element.innerText = text;
//        document.body.appendChild(element);
//    }
//   let text = 'My new element'; 
//    addSomeElementInBody('p', text);


//3.- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
/*
let car1 = {
    title : "Opel",
    model : "Q7",
    year : 2012,
    power : 3.2,
    color : "white"
};

let car2 = {
    title : "Mercedes",
    model : "Vito",
    year : 2010,
    power : 2.5,
    color : "white"
};

let car3 = {
    title : 'Chevrolet',
    model : "Cryze",
    year : 2014,
    power : 1.7,
    color : "white"
}

let car4 = {
    title : 'Volkswagen',
    model : "Caddy",
    year : 2014,
    power : 1.6,
    color : "grey"
};

let car5 = {
    title : 'Renault',
    model : "Sandero",
    year : 2014,
    power : 1.4,
    color : "green"
};

let car6 = {
    title : "Mercedes",
    model : "EQC",
    year : 2018,
    power : 2.6,
    color : "grey"
};

let car7 = {
    title : "Lexus",
    model : "ES-350",
    year : 2020,
    power : 2.5,
    color : "black"
};

let car8 = {
    title : "Opel",
    model : "Vivaro",
    year : 2010,
    power : 1.9,
    color : "black"
};

let car9 = {
    title : "Chewrolet",
    model : "Camaro",
    year : 2019,
    power : 2.0,
    color : "white"
};

let car10 = {
    title : "Opel",
    model : "Camaro ZL1 MT 6,2 AT",
    year : 2020,
    power : 6.2,
    color : "white"
};

let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
//console.log(cars);
*/

/*
function addCarsInBody(array, id) {
     for (const x of array) {
         let div = document.createElement('div');
        div.innerHTML = '<hr>' + x.title + " " + x.model + " " + x.year + '<br>' + x.power + " " + x.color;
        let tag = document.getElementById(id);
        tag.appendChild(div);
     }
}

addCarsInBody(cars, 'xxx');
*/

//4.- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
/*
function addCarsInBody(array, id) {
    for (const car of array) {
        let divCar = document.createElement('div');
        for (prop in car) {
            let property = document.createElement('p');
            property.innerText = car[prop];
            divCar.appendChild(property);
        }
       let tag = document.getElementById(id);
       tag.appendChild(divCar);
    }
}
addCarsInBody(cars, 'xxx');
*/

// на основі минулого ДЗ)
//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:

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


function JoinArrays(users, cities) {
    for (const user of users) {
        for (const city of cities) {
           if(user.id === city.user_id) {
            user.address = city;
           }
        }
    }
 console.log(users);
}

JoinArrays(usersWithId, citiesWithId);
*/


