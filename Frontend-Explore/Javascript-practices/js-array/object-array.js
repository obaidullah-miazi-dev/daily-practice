const employees = [
    { name: 'abdullah', designation: 'Digital Marketer', salary: 50000 },
    { name: 'mahmud', designation: 'content writer', salary: 40000 },
    { name: 'sami', designation: 'web dev', salary: 80000 }
]

// I can change an employee name also 
employees[0].name = 'ahmad';


// console.log(employees[0]);
// console.log(employees[0].designation);




// one way 
// for(const employee of employees){
//     // console.log(employee.name);
//     console.log(employee.name, employee.designation, employee.salary)
// }


// another way 
for (const emp of employees) {
    const person = emp;
    const personInfo = person.name + ': ' + person.designation + '- ' + person.salary + ' BDT';
    console.log(personInfo);
}