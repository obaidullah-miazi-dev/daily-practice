import React from 'react';

const Drink = ({ drink,handleAddToCart }) => {
    // console.log(drink);

    return (
        <div>
            <div className="card border-2 border-yellow-200 rounded-2xl p-5 mx-auto w-96 shadow-sm">
                <figure>
                    <img
                        src={drink.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {drink.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: {drink.price} USD</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{drink.category}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                <button onClick={() => handleAddToCart(drink)} className='btn bg-amber-700'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Drink;