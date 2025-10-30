const getFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart')

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString)
        return storedCart
    }
    return [];
}

const saveItmeToLs = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
const addItemToLocalStorage = (id) => {
    const cart = getFromLocalStorage()
    const newCart = [...cart, id]
    saveItmeToLs(newCart)
}

export {
    getFromLocalStorage as getStoredCart,
    addItemToLocalStorage as addToLs
}