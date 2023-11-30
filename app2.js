let num = 100;
let num1 = "100";
let num2;
let num3 = null;

const arr = ["hello",1,2,"four",true,[1,2,3]];
const arr1 = arr;
const myObj = {
    first : 'Axel',
    last : "Zaragoci",
    "full name" : "Axel Zaragoci",
    id : 100,
    id0 : 1,
    id1 : 2,
};
myObj["full name"] = "LS";

let val = "id0"

console.log(myObj[val]);
val = "id1"
console.log(myObj[val]);


console.log(myObj);




console.log(arr1);
arr[1] = "one"; 
console.log(arr);
console.log(typeof(arr));

num = "200" + num;
num1 = num1 + 100;

let boo = true;

//console.log(typeof(boo));

/*
console.log(typeof(num));
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));
*/