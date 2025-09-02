// odd numbers 


// 1st way 

// for (let i= 1; i<=20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }




// 2nd way

// for (let i= 1; i<=20; i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }




// 3rd way || easy way

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
// }


// give the list numbers between 1 to 30 divisible by 5

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }

// }



// give the list numbers between 1 to 30 divisible by 3

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }

// }




// give the list numbers between 1 to 30 divisible by 3 or 5

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }

// }



// give the list numbers between 1 to 100 divisible by 3 and 5

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }

// }



// give the sum of numbers from 1 to 30 that are  divisible by 3

let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
        sum = sum + i;
    }

}

console.log('sum of the numbers:', sum);



