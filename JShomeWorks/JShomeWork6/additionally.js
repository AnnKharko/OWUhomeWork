// Доп 2
// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88
let num = [1,6,9,0,17,88,4,7];
let max = num.reduce(function(acc, value) {return acc > value ? acc : value ;})
console.log(max);

//===============================
// найти приопущенную букву в массиве:
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
let sumbols = ["a","b","c","d","f"];
let sumb = ["O","Q","R","S"];


// let findSumbol = sumbols.reduce(function(acc, value) {
//     if (value.charCodeAt(0) - acc.charCodeAt(0) === 1) { return value ;}
//     else { let z = String.fromCharCode(value.charCodeAt(0) - 1);
//     console.log(`not found ${z}`); } 
// })

function findSumbol1(arr) {
    let findSumbolS = arr.reduce(function(acc, value) {
        if (value.charCodeAt(0) - acc.charCodeAt(0) === 1) { return value ;}
        else { let z = String.fromCharCode(value.charCodeAt(0) - 1);
        console.log(`not found ${z}`); 
       /*return z*/} 
    })
    return findSumbolS;
     
}
 findSumbol1(sumb);
//console.log(find);
