// function evenNumbersOnly(numbers) {
//     let evens = [];
//     for (const number of numbers) {
//         if (number % 2 === 0){
//             evens.push(number); 
//         }
        
//     }
    
//     return evens
// }


// numbers = [2, 3, 5, 7,8,12,9,64, 2, 5];
// const evens = evenNumbersOnly(numbers)
// evenNumbersOnly(numbers);
// console.log(evens);



function oddNumbersOnly(numbers){
    let sum = 0;
    for (number of numbers){
        if (number % 2 !==0){
            sum = sum + number;
            console.log(sum);
        }
    }
    return sum;
}

const numbers = [34,26,5,3,75,74,83,88,98,69,38];
const sum = oddNumbersOnly(numbers)
console.log('sum of odd numbers', sum);