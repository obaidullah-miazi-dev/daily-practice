// console.log('one')
// console.log('two')
// console.log('three')
// setInterval(() => {
//    console.log('four') 
// }, 2000);

// console.log('five')


console.log('one')
console.log('two')
console.log('three')
let count = 0;
const intervalId =setInterval(() => {
    console.log(count++) 
    if(count>10){
        clearInterval(intervalId)
    }
   
}, 2000);

console.log('five')