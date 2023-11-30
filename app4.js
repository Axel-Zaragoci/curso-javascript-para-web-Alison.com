let counter = 0;
const output1 = document.querySelector('.output');
console.log(output1.textContent);
output1.textContent = "Hello World";
console.dir(output1);

const outputs = document.querySelectorAll('.output');
outputs[1].onclick = fun1;
outputs[0].onclick = function() {
    counter++;
    output1.textContent = "Clicked "+counter
    console.log(counter)
}
// document.write("Hello");

outputs[2].addEventListener('click',fun1)



function fun1() {
    counter++
    outputs[1].textContent = "Output "+counter
    console.log("hi "+counter);
}