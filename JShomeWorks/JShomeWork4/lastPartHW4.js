//***- беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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

            function addRule(arr) {
       let wrap = document.createElement('div');
       for ( const rule of arr) {
           let div = document.createElement('div');
           let title = document.createElement('h2');
           let text = document.createElement('p');
           title.innerText = rule.title;
           text.innerText = rule.body;
           div.appendChild(title);
           div.appendChild(text);
           wrap.appendChild(div);
       }
     document.body.appendChild(wrap) ;
}

addRule(rules);
*/

//==========додаткове від віктора========
//1) Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!


/*
function isPowerOfTwo(n) {
    (n & (n - 1)) === 0 ? console.log("Yes") : console.log("No"); 
}
n = 125;
console.log(n.toString(2));

isPowerOfTwo(n);
isPowerOfTwo(64);
*/


//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій

/*
function deepClone(object) {
     let deepCopy = JSON.stringify(object);

    function isObg(obj) {
        if (typeof(obj) === "object") {
            let innerObj = JSON.stringify(obj);
            console.log(innerObj);
            return innerObj;
        }
    }
       
    for (obj in object) {
        let objIn =  isObg(object[obj]);
        object[obj] = objIn; 
    }
        //console.log(JSON.parse(object));
        console.log(JSON.parse(deepCopy));
        //let deepCl = JSON.parse(JSON.stringify(object));
        //console.log(deepCl);


        //let objInParse = JSON.parse(objIn);
        //for (obj in objIn) {
          //  let obgInIn =  isObg(objIn[obj]) ;
           // le
        //}

           //return obgIn 
    //}
          // console.log(deepCopy);
              
           // if (typeof(object[obj]) === "object") {
           //     let innerObj = JSON.stringify(object[obj]);
           //     console.log(innerObj);
            //}
            
        //}
        
}

//let copyObg = JSON.stringify(object)
//        console.log(obj);
//|| Array.isArray(obj)
let house = {
    address : {
        country : "Ukraine",
        city : "Lviv",
        str : ["Kosmonavtiv", "FFFFFFF"],
        num : 9  },
    area : 100,
    storey : 2,
    rooms : ["kitchen", "bathroom","badroom", "living room", "anteroom", "hallway"],
    isYard : true,
    isGarden :true,
};
//console.log(house);
let newArray = deepClone(house);

*/




////////////
//3) Flat
//Вирівняти багаторівневий масив в однорівневий
//[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//===========додаткове========

let fff = [1,
           3,
           ['Hello', 'Wordd', [
                                9,6,1]
           ], 
           ['oops'], 
           9] ;

function allignArr(array) {
   
   /*  for ( const obj of array) {
         document.write(typeof(obj) + "   ");
       if (typeof(obj) === "object") {
                let add = obj;
             array.splice(array.indexOf(obj),1);
             for (const x of add) {
                if (typeof(x) === "object") {
                    let ad = x;
                     add.splice(add.indexOf(x),1);
                     for (const x of ad ) {
                         add.push(x);
                      }
                }
             }
        for (const x of add) {
            array.push(x);
        }
        console.log(array);
        
    }
 } */

 for ( const obj of array) {
    document.write(typeof(obj) + "   ");
  if (typeof(obj) === "object") {
           let add = obj;
          let m = array.indexOf(obj);
        array.splice(m,1);
        for (const x of add) {
            if (typeof(x) === "object") {
                let ad = x;
                let n = add.indexOf(x)
                 add.splice(n ,1);
                 for (const x of ad ) {
                    // add.push(x);
                    add.splice(n ,0 , x );
                    n = n +1;
                  }
            }
         }
    for (const x of add) {
        //array.push(x);
        array.splice(m, 0, x);
        m = m + 1;
    }
    console.log(array);
    
}
}




}
console.log(fff);
allignArr(fff);