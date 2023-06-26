  //if statements,comparison,logical operators
const inA = document.getElementById('inA');
//const inB = document.getElementById('inB');
const btn = document.getElementById('btn'); 

btn.addEventListener('click',function(){
    switch (inA.value){
        case '1':
            alert('thilan');
            break
        case '2':
            alert('ts');
            break
        default:
            alert('no one');
            break;      
    }
})