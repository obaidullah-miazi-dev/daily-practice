// function discountedPrice(quantity){
//     if(quantity<=100){
//         const total = quantity*100;
//         return total;
//     }

//     else if(quantity<=200){
//         const total = quantity*90;
//         return total;
//     }

//     else{
//         const total = quantity*50;
//         return total;
//     }
// }

// const quantity=discountedPrice(180);
// console.log(quantity)

//===============================================================================================




// layered discount method 

function layeredDiscountedPrice(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 50;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }

    else if (quantity <= 200) {
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = first100Price * 100;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const total = layeredDiscountedPrice(250)
console.log(total);