/***
 * 
 * task 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let buyAmount = 100;

// if(buyAmount>200){
//     console.log("you get free mojo");
// }
// else{
//     console.log("pay for mojo 20 taka")
// }

/*** 
 * 
 * task 2
 * 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 60;
// let height= 1.75;
// let bmi = weight / (height*height);

// console.log("BMI:", bmi.toFixed(2));

// if(bmi < 18.5){
//     console.log('you are underweight');
// }

// else{
//     if(bmi>=18.5 && bmi<= 24.9){
//         console.log('you are normal');
//     }
//     else{
//         if(bmi >=25 && bmi <= 29.9){
//             console.log('you are overweight');
//         }

//         else{
//             console.log('you are obese')
//         }
//     }
// }




/***
 * 
 * task 3
 * 

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let marks = 59;

// if (marks >=90){
//     console.log('GRADE: A');
// }

// else if (marks >= 80 && marks <= 89){
//     console.log('GRADE: B');
// }

// else if ( marks >= 70 && marks <= 79){
//     console.log('GRADE: C');
// }
// else if ( marks >= 60 && marks <= 69){
//     console.log('GRADE: D');
// }

// else {
//     console.log('GRADE: F')
// }




/***
 * 
 * task 4
 * 

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/



// const myMarks = 80;
// const freindMarks = 70;

// if(myMarks >= 80){
//     if(freindMarks>=80){
//         console.log('go for lunch');
//     }
//     else{
//         if(freindMarks<=80 && freindMarks>=60){
//             console.log('good luck for next time');
//         }
//         else{
//             if(freindMarks <=60 && freindMarks >=40){
//                 console.log('I dont see your messeage');
//             }
//             else{
//                 if(freindMarks<=40){
//                     console.log('I block you');
//                 }
//             }
//         }
//     }
// }

// else{
//    console.log('go to home and sleep and act sad');
// }





/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// const num1 = 30;
// const num2 = 20;
// let result = '';
// if (num1 > num2) {
//     result = num1 * 2;
// }

// else{
//     result= num1+num2;
// }
// console.log(result);

// const num1 = 30;
// const num2 = 20;
// result = num1>num2? num1*2:num1+num2;
// console.log(result);











/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let ticketFare = 800;
// let age = 80;
// let student = true;

// if (age < 10) {
//     console.log('no fare,its free');
// }


// else if (age >= 60) {
//     console.log('get 15% discount,now your fare is:', ticketFare - (ticketFare * 15 / 100));
// }

// else if (student === true) {
//     console.log('get 50% discount,now your fare is:', ticketFare - (ticketFare * 50 / 100));
// }

// else {
//     console.log(ticketFare);
// }

