import React, { use } from 'react';
import Food from '../Food/Food';

const Foods = ({foodsPromise}) => {
    const foodsData = use(foodsPromise)
    const foods = foodsData.foods
    // console.log(foods)
    return (
        <div className='mx-auto w-11/12'>
           <div className='grid grid-cols-4 items-center gap-5'>
            {
            foods.map(food => <Food food={food}></Food>)
           }
           </div>
        </div>
    );
};

export default Foods;