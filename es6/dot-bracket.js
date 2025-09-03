const student = {
    name: 'obaidullah',
    age: 21,
    designation: 'student',
    'home-address': 'dhaka'
}

//dot notation
const studentName = student.name
// console.log(studentName)

// bracket notation
const homeAddress = student["home-address"]
// console.log(homeAddress)

// bracket example
for (const key in student){
    const value = student[key]
    // console.log(value)
}

const propName = 'age'
console.log(student[propName])