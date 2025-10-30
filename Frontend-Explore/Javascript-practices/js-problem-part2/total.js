// const products = [
//     { name: 'punjabi', price: 1500 },
//     { name: 'payjama', price: 500 },
//     { name: 'watch', price: 1400 }
// ]


// function totalPrice(products){
//     let total = 0;
//     for(product of products){

//         total = total + product.price;


//     }
//     return total;
// }

// const total =totalPrice(products);
// console.log('Total product price is: ', total)







const products = [
    { name: 'punjabi', price: 1500, quantity: 3 },
    { name: 'payjama', price: 500, quantity: 2 },
    { name: 'watch', price: 1400, quantity: 1 }
]


function totalPrice(products) {
    let total = 0;
    for (product of products) {
        
        const totalprice = product.price*product.quantity;
        total = total +totalprice;


    }
    return total;
}

const total = totalPrice(products);
console.log('Total product price is: ', total);