let val = "Laurence";
let counter = 0;
const fun1 = function() {
    val = val + "Svekis";
    counter++;
    console.log(val);
    console.log(counter);
}
fun2();
fun2();
fun2();
fun2();
function fun2() {
    val = val + "Svekis";
    counter++;
    console.log(val);
    console.log(counter);
}


function fun3() {
    let val = "Svekis";
    let val1 = 100;
    console.log(val);
}
console.log(val);
fun3();
console.log(val);
// console.log(val1);


function fun4(a,b,c) {
    console.log(a,b,c)
    let val = a + b * c;
    console.log(val);
}

fun4(3,6,8)
fun4(233,1236,28)

function fun5(a,b,c) {
    counter++;
    let val = a * b * c + counter;
    return val;
}

let output = fun5(4,7,8);
console.log(output);
output = fun5(4,7,8);
console.log(output);