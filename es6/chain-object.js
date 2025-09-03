// chain object give an error if any chain object is missing in object so if you add a question mark after chain object name which is maybe missing give the result undefind instead give error

const student = {
    name: 'obaidullah',
    age: 21,
    designation: 'student',
    'home-address': 'dhaka',
    family: {
        // borther:{
        //     name:'sanaullah',
        //     age:18
        // }
    }
}

console.log(student.family.borther?.name)