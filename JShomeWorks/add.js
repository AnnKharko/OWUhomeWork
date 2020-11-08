//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій

let book = {
    title : function hhty() {console.log(22 + 15);},
    author : "Ayn Rand",
    year : NaN,
    country : "United States",
    language : "English",
    publisher : {
        name : function hh() {console.log(22);} ,
        address : {
            country : "Ukraine",
            city : "Lviv",
            str : "Ivana Franka",
            num : NaN  }
    },
    genre : [ "Philosophical fiction",
              "Science fiction",
              "Mystery fiction",
              "Romance novel",
              "Libertarian science fiction"],
     numOfPages : undefined
};


function deepCopy(obj) {

    let copy = function(obj){ 
    for (x in obj) {
        if (typeof(obj[x]) === 'function') { 
        //    console.log(typeof(obj[x]));
            obj[x] = obj[x].toString();
        }
        if (obj[x] !== obj[x]) {
        obj[x] = "NaN";
        }
        if (typeof(obj[x]) === 'undefined') {
            obj[x] = "undefined";
        }
        if (typeof(obj[x]) === 'object') {
           deepCopy(obj[x])
        }
     
    }
    return obj;
}
       
    let replacement = function(nObj) { 
        for (x in nObj) { 
        if (nObj[x] === "NaN") {
            //nObj[x] = parseInt(nObj[x]);
            nObj[x] = Number(nObj[x]);
        }
        if (nObj[x] === "undefined") {
            nObj[x] = undefined;
        }
        if (typeof(nObj[x]) === "string" && nObj[x].includes('function')) { 
            nObj[x] = eval("(" + nObj[x] + ")");
        }
       if (typeof(nObj[x]) === 'object') {
       replacement(nObj[x]);
        }
    
        }
       
           return nObj;
    
    }  

  let objFromCopy = copy(obj);
  let objFromCopyJSONE =  JSON.parse(JSON.stringify(objFromCopy));

  let objNewFromReplace = replacement(objFromCopyJSONE);
    return objNewFromReplace; 
}  
       
 bookjs = deepCopy(book);
 console.log(bookjs);


// ===================================
let xy = { one : undefined,
          two : NaN,
          three: [34.6, 'fgfhfh', {
              fff : function hh() {console.log(22);} 

          }, true],
          four : function() { console.log(this.fgs); }
};
xyCopy = deepCopy(xy);
console.log(xyCopy);