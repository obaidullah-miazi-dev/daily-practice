import React from 'react';

const Food = ({ food }) => {
    console.log(food)
    return (
        <div className='w-[400px] border-2 border-gray-300 p-4 rounded-xl h-[580px] flex flex-col justify-between'>
            <div className='space-y-3'>
                <img className='rounded-xl w-[450px]' src={food.foodImg} alt="" />
                <h1 className='font-bold text-2xl'>{food.title}</h1>
                <div className='flex justify-between items-center'>
                    <button className='bg-yellow-200 dark:bg-amber-500 p-1 rounded-lg px-2 font-semibold'>{food.category}</button>
                    <h3 className='font-semibold'>{food.price} BDT</h3>
                </div>
            </div>

            <div>
                <button className='btn w-full bg-amber-500 p-2 font-semibold text-lg text-white rounded-lg'>Buy Now</button>
            </div>
        </div>
    );
};

export default Food;