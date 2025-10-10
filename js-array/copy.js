let numbers = 15;
let price = numbers;

numbers= 50;

// console.log(numbers);
// console.log(price);


const products = ['mobile','airpods','charger','power bank'];
// const com_products = product;
const com_products = [];

for (const product of products){
    com_products.push(product);
    
}



products[0]= 'smartphone';
com_products[3]= 'magsafe charger';

// console.log(products);
// console.log(com_products);



const number = [1,2,3,4,5];
// const newNumber = Array.from(number);
// const newNumber= [].concat(number);
// another easy way 
const newNumber= [...number];
newNumber.push(6,7)


console.log(number);
console.log(newNumber);
