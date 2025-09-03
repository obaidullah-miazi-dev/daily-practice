// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(celsius){
//    const  fahrenheit = (celsius *9/5) + 32;
//    return fahrenheit; 
// }

// const c = 5;
// const result = celsiusToFahrenheit(c);
// console.log(c, 'celsius', '= ' ,result, '°F');


//------------------------------------------------------------------------------------------------



// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// function count(numbers) {
//     const repeated = [];
//     for (number of numbers) {
//         if (repeated.includes(number) === false) {
//             repeated.push(number);
//             console.log(repeated);
//         }
//     }

// }

// const numbers = [5, 6, 11, 12, 98, 5];
// const result = count(numbers);
// console.log(result);















// Task-3:
// Write a function to count the number of vowels in a string.

// function countVowels(str){
 
//     let count = 0;
//     const vowels = 'aeiouAEIOU';
//     for(let i = 0; i<str.length; i ++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;

// }

// const string = 'hello! i am web developer';
// const functionCall =countVowels(string);
// console.log(functionCall);