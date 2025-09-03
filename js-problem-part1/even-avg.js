function evenAverage(numbers) {
    let evenNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    

    let sum = 0;
    for (const num of evenNumbers) {
        sum = sum + num;
    }

    const count= evenNumbers.length
    const avg = sum/count;
    return avg;
    
}

const numbers = [32, 53, 62, 65, 98, 36, 85, 89, 39, 94];
const average = evenAverage(numbers);
console.log(average);
