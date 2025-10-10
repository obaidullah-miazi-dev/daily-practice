const person = {
    name: 'Sanaullah',
    age: 17,
    occupation: 'student',
    married: 'unmarried',
    favColor:{
        color: 'blue,green',
        favFood:{
            desert: ['ice-cream','cake','chips','chocolate']
        }
    }
}

console.log(person);
console.log(person.favColor)

console.log(person.favColor.color)
person.favColor.favFood.desert = 'cake';
person.favColor.favFood.desert[1]= 'pan-cake';
console.log(person.favColor.favFood.desert)
delete person.married;
console.log(person);
// console.log(JSON.stringify(person, null, 2));
