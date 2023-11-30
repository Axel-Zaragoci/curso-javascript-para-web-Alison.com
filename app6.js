let counter = 0;
const arr = ['a','e',13,14,5];
const myObj = {
    a : 'one',
    b: 'Three',
    message : "Hello World",
}
for(let i=0;i<10;i++) {
    counter++;
    // console.log(i,counter);
}
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

arr.forEach((val,ind,arrV)=>{
    console.log(val,ind,arrV);
});
console.clear();
for(val in arr) {
    console.log(arr[val]);
};
for(val in myObj){
    console.log(myObj[val]);
}
for(val of arr) {
    console.log(val);
}
console.clear()
let i = 1
while (i<10) {
    console.log(i)
    i++;
}
i = 100;
do {
    console.log(i);
    i++;
}
while(i<10);
console.clear()

const outputs = document.querySelectorAll('.output')
console.log(outputs);
outputs.forEach((ele,ind)=>{
    console.log(ele);
    ele.textContent = `New ${ind+1}`;
    ele.val = 0;
    ele.onclick = function() {
        ele.val++;
        ele.textContent = `Click ${ele.val}`;
    }
});