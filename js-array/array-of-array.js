const studentMarks = [
    [98,85,93,79,69],
    [90,58,99,100,89],
    [88,98,97,92,89]
];

// 1st way 
// console.log(studentMarks[0]);
// console.log(studentMarks[0][0]);

// 2nd way 
// const firstMarks = studentMarks[0];
// console.log(firstMarks);
// console.log(firstMarks[0]);

for (marks of studentMarks){
    console.log(marks);
}