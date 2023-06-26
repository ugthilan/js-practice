//if statements,comparison,logical operators


const inA = document.getElementById('inA');
const inB = document.getElementById('inB');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(e) {
    if(inA.value > inB.value){
       window.alert('A is greater than B');

    }else if(inA.value == inB.value){
        window.alert('A is equal to B');
    }
    
    else{
        window.alert('B is greater than A');
    }
    
    
});


let a = 10;
let b = 20;
let c = 10;

if(a != b && a != c);{
    console.log('A is not equal to b and C')
}

console.log( a>b && a>c)
console.log( a>b || b>c)


// function check odd numbers

function checkOdd(num) {
    if(num %2 == 0 ){
        return false;
    }
    else{
        return true;
    }
}

if(checkOdd(10)){
    console.log('Odd');
}else{
    console.log('Even');
}