// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// Answer: 

// function multiply (a,b,c,d){
//     const  result = a*b*c*d;
//     return result
// }

// const result = multiply(1,2,3,4);
// console.log('The result is: ',result);

// ----------------------------------------------------------------------------------------------




// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function number(num){
//     if (num % 2 !==0){
//         const multiply = num * 2;
//         console.log('this is odd number - ', multiply);
//         return multiply;
//     }
//     else {
//         const divide = num / 2;
//         console.log('this is even number - ', divide);
//         return divide;
//     }
// }

// const result = number(30);
// console.log(result);

//-----------------------------------------------------------------------------------------------




// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(array) {
//     let sum = 0;
//     const length = array.length;
//     console.log('the length of array is : ', length);
//     for (let number of array) {
//         sum = sum + number;

//     }
//     return sum / length;
// }

// const result = make_avg([20, 58, 45, 32, 15]);
// console.log('the average of numbers is : ', result);


//----------------------------------------------------------------------------------------------




// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binary){
//     let binaryNum = binary.split(1);
//     let binary0 = binaryNum.join('');
//     let binaryLength = binary0.length;
//     return binaryLength;
// }

// let result =count_zero('0110100001101001000');
// console.log('In the string there are ', result, ' 0’s are there');

//-------------------------------------------------------------------------------------------------





// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function odd_even(number){
//     if (number % 2 ===0){
//         return 'even';
//     }
//     else {
//         return 'odd'
//     }
// }

// let num = odd_even(52);
// console.log(num);


