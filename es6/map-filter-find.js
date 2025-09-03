const students = [
    {id:1,name:'obaidullah',marks:95},
    {id:2,name:'mahmud',marks:75},
    {id:3,name:'farabi',marks:70},
    {id:4,name:'forazi',marks:98}
]

const student = students.map(name => name.name)
const goodStudent = students.filter(name => name.marks>80)
const firstGoodStudent = students.find(name => name.marks>80)
console.log(student)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);