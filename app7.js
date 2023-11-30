let val;
let a = "Hello World";
a = a.trim()
val = a.slice(0,5)
val = a.substring(6,12)
val = a.substr(-5)
val = a.replace('World','Coders')
val = a.toUpperCase();
val = a.search('llo')
val = a.indexOf('ll')
// val = a.trim();

const outputs = document.querySelectorAll('.output');
outputs.forEach(ele=>{
    let myStr = ele.textContent;
    myStr = myStr.replace('Output', 'new words').toUpperCase()
    ele.textContent = myStr
    ele.onclick = function(){
        ele.textContent = ran(1,total);
    }
})
let total = 100;
// val = ran(1,total);

console.log(val);

function ran(min,max){
    return val = Math.floor(Math.random() * (max - min)) + min
}