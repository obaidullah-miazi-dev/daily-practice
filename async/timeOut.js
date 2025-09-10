console.log('one')
console.log('two')
console.log('three')
const timeOutId =setTimeout(() => {
    console.log('four')
}, 5000);

console.log('timeoutid:', timeOutId)

console.log('five')

clearTimeout(timeOutId)