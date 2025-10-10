const numbers = [45,64,57,87];
// console.log(numbers)
// console.log(...numbers)

// const max = Math.max(68.85,356,24);
const max = Math.max(...numbers);
// console.log(max)
// console.log(max)


// const first = [1,2,3,4,5]
// const second = first
// second.push(6)
// console.log(first)

const first = [1,2,3,4,5]
const second = [...first]
second.push(6)
console.log(first)
console.log(second)