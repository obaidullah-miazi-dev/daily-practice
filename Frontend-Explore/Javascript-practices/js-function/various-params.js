function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size ⬆️');
    }
    else {
        console.log('odd size ⬆️')
    }
}
// evenSizedString('Hello')
// evenSizedString('Hell')





function doDoubleOrTriple (num, doubled){
    if(doubled === true){
        const result = num*2;
        return result;
    }
    else{
        const result = num *3;
        return result;
    }
}

// console.log(doDoubleOrTriple(5,true)); 
// console.log(doDoubleOrTriple(5,false)); 


function numOfElements (num){
    const length = num.length;
    return length;
}

// console.log(numOfElements([12,34,24,56,36,26,6]));

function object(obj){
    const age = obj.age;
    return age;
}

const ageOfPerson = object(
    person = {
        name:'abdullah',
        age:18
    }
)

// console.log('age:',ageOfPerson)