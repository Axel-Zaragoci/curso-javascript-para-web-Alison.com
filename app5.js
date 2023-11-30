const output = document.querySelector('.output')
if(true) {
    console.log("was true")
}
if(false) {
    console.log("was false")
}
let a = 8;
let b = "5";
let c = a + b;
let d = 10;
let val;
if(a >= 5) { val = `${a} was greater than 5` }
if (b === 5)  { val = `${b} is equal to ${5}`}

if ((a > d) && (a > 0)) {
    val = `${a} > ${d}`;
} else {
    val = `Not true ${a} > ${d}`;
}

val = (a > d) ? "A is Higher" : "A is Lower";

if (5 > 10) {val = true}
else if(10 == 5) { val = "Nope"}
else {val = "False"}

switch(a) {
    case 5: 
        val = "5";
        break
    case 15: 
        val = "15";
        break
    default:
        val = "Non were true in the switch"
}

console.log(val);
output.textContent = val;