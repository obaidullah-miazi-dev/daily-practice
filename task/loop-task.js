/***
 * 
 * task 1
 * 

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// const message = 'I will invest at least 6 hrs every single day for next 6 months';

// let num = 1;
// while (num <= 60){
//     console.log('I will invest at least 6 hrs every single day for next 6 months');
//     num++;
// }

// ----------------------------------------------------------------------------------------------------------------------


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// let oddNumber = 61;
// while (oddNumber<=100){
//     console.log('odd number:',oddNumber);
//     oddNumber= oddNumber+2;
// }


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


// let evenNumber = 78;
// while (evenNumber<=98){
//     console.log('even number:',evenNumber);
//     evenNumber= evenNumber+2;
// }



// let oddNumber = 81;
// let sum = 0;
// while (oddNumber<=131){
//     console.log('odd number:',oddNumber);
//     sum = oddNumber+sum;
//     oddNumber= oddNumber+2;
//     console.log('sum number:',sum);
// }



// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

//  let evenNumber = 206;
//  let sum = 0;
//  while(evenNumber<311){
//     console.log('even number:', evenNumber);
//     sum = evenNumber+sum;
//     evenNumber++;
//     console.log('sum number:',sum);

//  }
//  console.log('final sum of even numbers from 206 to 311:',sum);






/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

// let i = 1;
// number = 5;
// while(i<=10){
//     console.log('5 *',i, ' = ', number*i);
//     i++;
// }












/***

Implement a countdown timer that counts down from 21 to 15.

 */

// let countDown = 21;
// while (countDown>=15){
//     console.log(countDown);
//     countDown--;
// }




/*** 

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// for (let i = 1; i <=60; i++){
//     console.log('I will invest at least 6 hrs every single day for next 6 month');
// }



// Find all the odd numbers from 61 to 100.

// for (let oddNumber = 61; oddNumber <=100; oddNumber= oddNumber+2){
//     console.log('odd number:',oddNumber);
// }

// Find all the even numbers from 78 to 98.

// for (let evenNumber= 78; evenNumber<=98; evenNumber= evenNumber+2){
//     console.log('even number:',evenNumber);
// }


// Display sum of all the odd numbers from 81 to 131.
// let sum =0; 
// for (let oddNumber= 81; oddNumber<=131; oddNumber=oddNumber+2){
//     console.log('odd Number:',oddNumber)
//    sum= sum+oddNumber
//    console.log('sum of odd number:',sum);
// }
// console.log('total sum:',sum);


// Display sum of all the even numbers from 206 to 311.

// let sum= 0;
// for (let evenNumber=206; evenNumber<=311; evenNumber=evenNumber+2){
//     console.log('even number:',evenNumber);
//     sum= sum+evenNumber;
//     console.log('sum number:',sum);
// }

/***

Generate a multiplication table for number 9

 */

// let number = 9;
// for (let i=1; i <=10; i++){
//     console.log(number, '*', i, ' = ', number*i);
// }


/***

Implement a countdown timer that counts down from 81 to 65.

 */

// for (let countDown= 81; countDown>=65; countDown--){
//     console.log(countDown);
// }


/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
// while loop method 

// let i = 1;
// while (i <= 40) {
//     i++;
//     if (i % 2 !==0) {
//         continue;
//     }

//     console.log(i);
// }

// for loop method 

// for (let i = 1; i<=40; i++){
//     if(i%2 !==0){
//         continue;
//     }
//     console.log(i);
// }


// for loop chatgpt challange

// for (let i = 1; i<=100; i++){
//     if(i >=40){
//         break;
//     }
//     if(i%2!==0){
//         continue;
//     }
//     if (i>30){
//         continue;
//     }
//     console.log(i);
// }


// while loop chatgpt challange 
// let i = 1;
// while (i <= 100) {
//     i++;

//         if(i >=40){
//         break;
//     }


//     if (i % 2 !==0)   {

//         continue;
//     }

//     if (i>30){
//         continue;
//     }




//     console.log(i);

// }




/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// let i = 55;
// while (i <= 85) {
//     if (i % 2 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     }
//     i++;
// }




/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


// let i = 1;
// let sum= 0;
// while (i<=20){
    
//     if(sum+i>100){
//         break;
//     }
//     console.log('number:', i);
//     sum = i+sum;
//     console.log('sum:', sum)
//     i++;
    
// }


// let sum = 0;
// for (let i = 1; i<=20; i++){
//     if(sum+i>100){
//         break;
//     }
//     console.log('number:',i);
//     sum= i+sum;
//     console.log('sum:',sum);
// }


