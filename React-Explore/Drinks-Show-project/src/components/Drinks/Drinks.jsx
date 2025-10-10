import React, { use, useEffect, useState } from 'react';
import Drink from '../Drink/Drink';
import { addToLs, getStoredCart } from '../../utilites/localStorage';

const Drinks = ({ drinksPromise }) => {
    const drinks = use(drinksPromise)

    const [cart, setCart] = useState([])

    useEffect(() => {

        const storedCartIds = getStoredCart();
        // console.log(storedCartIds, drinks);


        const storedCart = [];


        for (const id of storedCartIds) {

            // console.log(id)

            const cartDrink = drinks.find(drink => drink.id === id)

            if (cartDrink) {
                storedCart.push(cartDrink)
            }

        }

        setCart(storedCart)


    }, [drinks])

    const handleAddToCart = (drink) => {
        const newCart = [...cart, drink]
        setCart(newCart)
        addToLs(drink.id)
    }


    return (
        <div>
            <h1 className='font-black m-5 md:ml-28 mb-12   text-5xl '>Cart: {cart.length}</h1>
            <div className='md:grid grid-cols-3 gap-8 mx-auto'>
                {
                    drinks.map(drink => <Drink drink={drink} key={drink.id} handleAddToCart={handleAddToCart}></Drink>)
                }
            </div>
        </div>
    );
};

export default Drinks;