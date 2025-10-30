const numbers = [2,8,4,6,3]

// hard way 

// const double=[]
// for (const num of numbers){
//     const result= num*2
//     double.push(result)
// }





// easy way 

// const doubleIt = x => x*2;
// const double = numbers.map(doubleIt)




// more easy way 
const double= numbers.map(num => num*2)



// map on an array who have some name/string

const names = ['ami','tumi','se','tara']

const nameLength = names.map(name=>name.length)
const justName = names.map(name => name.toUpperCase())
console.log(justName)