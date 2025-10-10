// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red','blue','green','yellow','orange'];
// let reverse = [];
// for (let i = 0; i<colors.length;i++){
//     reverse.unshift(colors[i]);
// }
// console.log(reverse);

// -------------------------------------------------------------------------------------------------------------------




// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// Answer:

// const numbers = [12,98,5,41,23,78,46];
// let evenNumbers = [];

// for (let i = 0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         evenNumbers.push(numbers[i]);
//     }
// }
// console.log(evenNumbers);

// -------------------------------------------------------------------------------------------------------------------



// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// Answer:1

// var names = ['tom','tim','tin','tik'];
// for (name of names){
//     name=names.join('')
// }
// console.log(name);



// Answer:2

// var names = ['tom','tim','tin','tik'];
// var result = '';
// for (name of names){
//     result+=name;
// }

// console.log(result);


// -------------------------------------------------------------------------------------------------------------------

// Task 4

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output: 'person working hard a am I'

// Answer :

// const statement = 'I am a hard working person';

// const brByWord = statement.split(' ');
// const reverse = [];
// for (let i = 0; i < brByWord.length; i ++){
//     reverse.unshift(brByWord[i]);
// }

// console.log(reverse.join(' '));



//----------------------------------------------------------------------------------------------------




// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// let original = [1,2,3];
// let copy = Array.from(original);
// copy[0]= 99;

// console.log(original);
// console.log(copy);


//----------------------------------------------------------------------------------------------------





// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

// Answer 

// var students = [
//     {name: 'John', marks:85},
//     {name: 'Alice', marks:90}
// ]

// for (let eachStudent of students){
//     const info = eachStudent.name + ' Scored '+ eachStudent.marks;
//     console.log(info)
// }


//--------------------------------------------------------------------------------------------------





// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

let inputArray = [
    [1,2],
    [3,4],
    [5,6]
];

let copyArray = Array.from(inputArray);

copyArray[1] = [99,4];
console.log(copyArray);