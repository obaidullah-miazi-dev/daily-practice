// const heights = [52, 64, 73, 83, 72, 82, 86, 94];

// function maxHeights(numbers) {
//     let max = numbers[0];
//     for (number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }

//     return max ;
// }

// const max = maxHeights(heights);
// console.log(max);

const heights = [34,65,73,82,28,92];
function minHeights(numbers){
    let min = numbers[0];
    for(number of numbers){
        if(number<min){
            min = number;
        }
    }
    return min;
}

const min= minHeights(heights);
console.log(min);