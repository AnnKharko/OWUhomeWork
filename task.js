// #task
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class Car {
    constructor(model, year, engPower, price, driver) {
        this.model = model;
        this.year = year;
        this.engPower = engPower;
        this.price = price;
        this.driver = driver;
    }
}

class Person {
    constructor(name, age, expiriance) {
        this.name = name;
        this.age = age;
        this.expiriance = expiriance;
    }

}
let driver1 = new Person('Will', 38, 20);
let driver2 = new Person('William', 20, 2);
let driver3 = new Person('Benjamin', 21, 4);
let driver4 = new Person('Oliver', 22, 4);
let driver5 = new Person('Lucas', 30, 12);
let driver6 = new Person('James', 31, 12);
let driver7 = new Person('Alexander', 25, 7);
let driver8 = new Person('Logan', 28, 10);
let driver9 = new Person('Samuel', 32, 5);
let driver10 = new Person('Matthew', 24, 5);
let driver11 = new Person('Daniel', 38, 20);
let driver12 = new Person('Aiden', 30, 14);
let driver13 = new Person('Henry', 27, 4);
let driver14 = new Person('Jackson', 23, 5);
let driver15 = new Person('David', 33, 15);

let car1 = new Car('Opel Q7', 2012, 3.2, 36000, driver1);
let car2 = new Car('Mercedes Vito', 2010, 2.5, 36000, driver2);
let car3 = new Car('Chewrolet Cryze', 2014, 1.8, 36000, driver3);
let car4 = new Car('Volkswagen Caddy', 2014, 1.6, 36000, driver4);
let car5 = new Car('Renault Sandero', 2012, 3.2, 36000, driver5);
let car6 = new Car('Mecedes EQC', 2018, 2.6, 36000, driver6);
let car7 = new Car('Lexus ES-350', 2020, 3.2, 36000, driver7);
let car8 = new Car('Opel Vivaro', 2010, 1.9, 36000, driver8);
let car9 = new Car('Chewrolet Camaro', 2019, 2.0, 36000, driver9);
let car10 = new Car('Opel Camaro ZL1 MT 6,2 AT', 2020, 6.2, 36000, driver10);
let car11 = new Car('Mecedes ', 2018, 2.6, 36000, driver11);
let car12 = new Car('Chewrolet', 2019, 2.0, 36000, driver12);
let car13 = new Car('Lexus', 2020, 3.2, 36000, driver13);
let car14 = new Car('Volkswagen', 2014, 1.6, 36000, driver14);
let car15 = new Car('Opel', 2012, 3.2, 36000, driver15);

let service = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15];
console.log(service.length);
console.log(service);

function incrementCapacity(cars, nPover, nPrice) {
    let morePower = [];
    for (let i = 0; i < cars.length; i = i + 2) {
        let car = JSON.parse(JSON.stringify(cars[i]));
        car.engPower = + (cars[i].engPower + cars[i].engPower * nPover / 100).toFixed(1);
        car.price = cars[i].price + cars[i].price * nPrice /100
        morePower.push(car);
        }
   return morePower;
}

let carsWithIncresPower = incrementCapacity(service, 10, 5);
console.log(carsWithIncresPower);


let neWdriver1 = new Person('Silas', 28, 3);
let neWdriver2 = new Person('Tristan', 30, 12);
let neWdriver3 = new Person('Ryder', 21, 4);
let neWdriver4 = new Person('Bennett', 25, 7);
let neWdriver5 = new Person('George', 30, 4);
let neWdriver6 = new Person('Justin', 34, 22);
let neWdriver7 = new Person('Kai', 25, 7);
let neWdriver8 = new Person('Max', 28, 10);

let newDrivers = [neWdriver1, neWdriver2, neWdriver3, neWdriver4, neWdriver5, neWdriver6, neWdriver7, neWdriver8];


function changeDriver(cars, drivers) {
       let carsND = [];
        for(let i = 0; i < cars.length; i++) {
            let car = JSON.parse(JSON.stringify(cars[i]));
            car.driver = drivers[i];
           carsND.push(car);
        }
        return carsND;
}

let carsWithNewDrivers = changeDriver(carsWithIncresPower, newDrivers);
console.log(carsWithNewDrivers);

let remainingCars = [];
for (let i = 1; i < service.length; i = i + 2) {
         remainingCars.push(service[i]); 
}
console.log(remainingCars);

let allCars = carsWithNewDrivers.concat(remainingCars);
console.log(allCars);

function onAdvancedTraining(arr, n){
    let onTraining = [];
    for (const x of arr) {
        if (x.driver.expiriance < n && x.driver.age >= 25) {
            onTraining.push(x);
            console.log(x.driver);
        }
    }
    return onTraining;
}

let driverOnTraining = onAdvancedTraining(allCars, 5);
console.log(driverOnTraining);


let overallPrice = 0;
for (const x of allCars) {
    overallPrice = overallPrice + x.price;
}
console.log(overallPrice);
console.log(`Сума, яку потрібно потратити для покупки всіх авто  = ${overallPrice}`);
