/* 
==============================================
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результату
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/some props and values/},
        {/*...},
        {/*...},
    ]

}
==============================================

function Tag(name, action, attrs) {
    this.name = name;
    this.action = action;
    this.attrs = attrs;


     //this.discr = function() {
       //console.log(` ${this.name} + <br> + ${this.action} + <br> + ${this.attrs} + <hr>`);
   //     console.log(this.name + "<br>" + this.action + "<br>" + this.attrs + "<hr>");
   // }; 

    //this.LogThis = function() {
    //    console.log(this);
   // };

    
}

//a
let aText = 'Тег <a> предназначен для создания ссылок. Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. ';
let attrs = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
    {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'}
];
let a = new Tag('a', aText, attrs);
console.log(a);

//div
let divText = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let divAtr = [
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
];
let div = new Tag('div', divText, divAtr);
console.log(div);

//h1
let h1Text = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня,';
let h1Atr = [
    {titleOfAttr: 'align', actionOfAttr: 'Выравнивание заголовка текста по краю.'}
];
let h1 = new Tag('h1', h1Text, h1Atr);
console.log(h1);

//span
let spanText = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let spanAtr = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'}
];
let span = new Tag('select', ospanText, spanAtr);
console.log(span);
//input
let inputText = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
let inputAtr = [
    {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
    {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr: 'pattern', actionOfAttr: 'Устанавливает шаблон ввода.'}
];
let input = new Tag('select', inputText, inputAtr);
console.log(input);
//form
let formText = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
let formAtr = [
    {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    {titleOfAttr: 'metod', actionOfAttr: 'Метод протокола HTTP.'},
    {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}
];
let form = new Tag('select', formText, formAtr);
console.log(form);
//option
let optionText = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let optionAtr = [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'selected', actionOfAttr: ' Заранее устанавливает определенный пункт списка выделенным.'},
    {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
];
let option = new Tag('select', optionText, optionAtr);
console.log(option);
//select
let selectText = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let selectAtr = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
    {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'}
];
let select = new Tag('select', selectText, selectAtr);
console.log(select);
*/


//==============================================
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================
/*
let car = {
    model : 'Camaro ZL1 MT 6,2 AT',
    producer : 'Chevrolet ,General Motors',
    year : 2020,
    maxSpeed : 320,
    engCapacity : 6.2,
    
    drive : function() {
        console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
    },
    
    info : function() {
        let info = `${this.model}, виробник : ${this.producer},  рік випуску   ${this.year} ,  максимальна швидкість --  ${this.maxSpeed} ,  об'єм двигуна s ${this.engCapacity}`;
        console.log(info);
        return info;
    },

    increaseMaxSpeed : function(newSpeed) {
        let speed = this.maxSpeed += newSpeed; 
        console.log(speed);
        return speed;
    },

    changeYear : function(newValue) {
        this.year = newValue;
        console.log(this.year);
        return this.year;
    },

    addDriver : function(driver) {
         car.driver = driver;
         console.log(car.driver);
    } 
};

let driver = {
    name : "Will",
    age : 30,
    sex : "male",
    expiriance : 10
};

 let year = (2018);
 car.drive();
 car.info();
 car.increaseMaxSpeed(50);
 car.changeYear(year);
 car.addDriver(driver);
*/
 
//==============================================
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================

/*
function Car(model, producer, year, maxSpeed, engCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engCapacity = engCapacity;
  
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        let info = `${this.model}, виробник : ${this.producer},  рік випуску   ${this.year} ,  максимальна швидкість --  ${this.maxSpeed} ,  об'єм двигуна s ${this.engCapacity}`;
        console.log(info);
        return info;
    };

    this.increaseMaxSpeed = function(newSpeed) {
        let speed = this.maxSpeed += newSpeed; 
        console.log(speed);
        return speed;
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(this.year);
        return this.year;
    };
    this.addDriver = function(driver) {
        this.driver = driver;
        console.log(this.driver);
    } ;
}

let modelx = 'Camaro ZL1 MT 6,2 AT';
let producerx = 'Chevrolet ,General Motors';
let yearx = 2020;
let maxSpeedx = 320;
let engCapacityx = 6.2;
let driverx = {
    name : "Will",
    age : 30,
    sex : "male",
    expiriance : 10
};

let car1 = new Car(modelx, producerx, yearx, maxSpeedx, engCapacityx);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(yearx);
car1.addDriver(driverx);
*/

//==============================================
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//=============================================

/*
class Car {
    constructor(model, producer, year, maxSpeed, engCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engCapacity = engCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info() {
        let info = `${this.model}, виробник : ${this.producer},  рік випуску   ${this.year} ,  максимальна швидкість --  ${this.maxSpeed} ,  об'єм двигуна s ${this.engCapacity}`;
        console.log(info);
        return info;
    };

    increaseMaxSpeed(newSpeed) {
        let speed = this.maxSpeed += newSpeed; 
        console.log(speed);
        return speed;
    };
    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
        return this.year;
    };
    addDriver(driver) {
        this.driver = driver;
        console.log(this.driver);
        } ;
}


let model = 'Mercedes Vito';
let producer = 'Mercedes Benz';
let year = 2013;
let maxSpeed = 320;
let engCapacity = 2.5;
let driver = {
    name : "Will",
    age : 38,
    sex : "male",
    expiriance : 20
};

let car2 = new Car(model, producer, year, maxSpeed, engCapacity);
car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(year);  
car2.addDriver(driver);
*/

//==============================================
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//==============================================


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(name, age, sizeShoe) {
        this.name = name;
        this.age = age;
        this.sizeShoe = sizeShoe;
    }
}
let prince = new Prince( 'William', 20, 33);
//console.log(prince);

let princess1 = new Cinderella('Anastasia', 18, 35);
let princess2 = new Cinderella('Beatrice', 17, 36);
let princess3 = new Cinderella('Diana',19 ,35);
let princess4 = new Cinderella('Elizabeth', 15, 34);
let princess5 = new Cinderella('Elsa', 20, 37);
let princess6 = new Cinderella('Anna', 16, 35);
let princess7 = new Cinderella('Cinderella', 16, 33)
let princess8 = new Cinderella('Fiona', 17, 38);
let princess9 = new Cinderella('Isabella', 15, 34);
let princess10 = new Cinderella('Jasmine', 19, 36); 

let princesses = [princess1,princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10];

  //  for (const princess of princesses) {
  //      if (princess.footSize === prince.sizeShoe) {
  //          let justThisOne = princess;
  //           console.log(justThisOne);
  //     }
  // }


//==============================================
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//==============================================


function findCinderella(prince, arr) {
    for (const princess of arr) {
        if (princess.footSize === prince.sizeShoe) {
            let justThisOne = princess;
             console.log(justThisOne);
             return justThisOne;
        }
    }

}

let cinderella = findCinderella(prince, princesses);
