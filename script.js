//Data types
let str = "Hello World!";
let num = 42;
let bool = true;
let obj = {
    name: "supun",
    age:22
};
let arr = [1, 2, 3];
function myFunction() {
    console.log("Hello World");
}

console.log(typeof myFunction);

let a = 10;
let b ='10';

console.log(typeof a);
console.log(typeof b);
console.log(a == b);
console.log(a === b);
console.log(a === '10');

//data type convert karan heti
let inA = document.getElementById('inA');
let btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    console.log(typeof inA.value);
    //let num = Number(inA.value);
    let num = parseInt(inA.value);

    console.log(typeof num);
    console.log(num);
})

//string ekkt num ek convert krnn

console.log(typeof num)
console.log(typeof String(num))
console.log(typeof num.toString())
