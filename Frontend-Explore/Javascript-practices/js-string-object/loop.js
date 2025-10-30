const mobile = {
    brand:'Iphone',
    model:'Iphone 16 pro max',
    camera:'48mp',
    display:'fluid amoled',
    faceId: true
}

// console.log(mobile);
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key,':' ,mobile[key]);
}