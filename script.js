const students = [ 'john', 'jane', 'jack', 'jill'];

const list = document.querySelector( '#students');
const inA = document.querySelector( '#inA');
const btn = document.querySelector( '#btn');
const nums = document.querySelector( '#nums')
//list.innerHTML= '<li>'+students[0]+'</li>'

for(let i=0; i<students.length; i++){
    list.innerHTML +='<li>' +students[i]+'</li>'
}

btn.addEventListener( 'click', function(){
    let out = '';
    for(let i=1; i<=inA.value; i++){
        if(i == inA.value){
            out += i;
        }else{out += i+', ';
       
       // out += i+', '; 
        //out = out + i + ', '; dekama samanai
    }
    }
    nums.innerHTML = out;

})

for(student of students){
    console.log(student); 
} //uda for eken krpu ekm krnn ahki arrays wlt,hama array ekkt sarayyk run wenw

let name1 = 'thilan';
for(let char of name1){
    console.log(char); //hama string ekakakt sarayk run wenw
}

const users = [
    {name: 'Nuwan',
     age: 25,
     mark: 80,
    },

    {name: 'Kamal',
     age: 30,
     mark: 50,
    },

    {name: 'Amal',
     age: 20,
     mark: 20,
    },

    {name: 'Nimal',
     age: 40,
     mark: 60,
    },

]

for(let user of users){
    document.querySelector('#users').innerHTML += '<li>'+user.name+ ' has agrade of '+pass(user.mark)+'</li>';
}

function pass(marks){
    if(marks>=75){
        return 'A';
    }else if(marks>=65){
        return 'B';
    }else if(marks>=55){
        return 'C';
    }else if(marks>=45){
        return 'S';
    }else{
        return 'F';
    }
}

//while loop

let i = 0;
while(i<10){
    i++;
    console.log(i);
}

//do while

let j = 0;
do {
    console.log(j);
    j++;
}while (j<10);

//break and continue

const output = document.querySelector('#out');
for(let i=0; i<10; i++){
    if(i==3){
       // continue;
       break
    }
    output.innerHTML += '<li>' +i+'</li>';
}

