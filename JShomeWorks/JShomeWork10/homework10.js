// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let str = "Hello World";
function display(str) {
    let arr = [];
    for (let i = 0; i <= str.length - 1; i++) {
      arr[i] = str[i];
    }
    console.log(arr);
    function displaySumbol(sumbol) {
        return new Promise((resolve) => {
            setInterval(() => {
                resolve (sumbol); 
            },  Math.floor(Math.random() * 1001));  // or Math.floor(Math.random() * 101)
        })           
    }
       

    let i = 0;
    async function f() {    
        if (i !== arr.length) {  
            const x = await displaySumbol(arr[i]);       
            document.write(x);
            i++;
            f();
           }
       }
     f();
}
display(str);
