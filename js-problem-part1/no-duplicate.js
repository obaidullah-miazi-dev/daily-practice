function noDuplicate(array){
    const correctList = [];
    for(const list of array){
        if(correctList.includes(list) === false){
            correctList.push(list);
        }
    }
    return correctList;
}

const biriyaniKhor = ['abul','babul','kabul','babul','dabul','kabul','abul'];
const duplicate = noDuplicate(biriyaniKhor);
console.log(duplicate);