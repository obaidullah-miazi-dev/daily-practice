const productEl = document.getElementById('product')
const quantityEl = document.getElementById('quantity')


const addToCart = () => {
    const product = productEl.value
    const quantity = parseInt(quantityEl.value)
    // console.log(product, quantity)
    displayProduct(product, quantity)
    addProductToCart(product, quantity)
    productEl.value = '';
    quantityEl.value = '';

}

const getCart = () => {
    let cart = {};
    const cartJson = localStorage.getItem('cart')
    if(cartJson){
        cart = JSON.parse(cartJson)
    }
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart();

    if(cart[product]){
        cart[product]= cart[product] + quantity
    }
    else{

        cart[product] = quantity
    }
    // console.log('cart',cart)
    const cartJson = JSON.stringify(cart)
    localStorage.setItem('cart', cartJson)
}

const displayProduct = (product, quantity) => {
    const cartContainer = document.getElementById('cart-container')
    cartContainer.innerHTML += `
    <li>${product}: ${quantity}
    `
}

const displayLocalStorageProduct = () =>{
    const cart = getCart()
    
    for(const product in cart){
        const quantity= cart[product]
        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}

displayLocalStorageProduct()