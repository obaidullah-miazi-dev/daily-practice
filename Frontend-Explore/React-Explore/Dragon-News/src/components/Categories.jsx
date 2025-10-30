import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <p className='font-bold'>All Categories</p>
            <div className='grid grid-cols-1 mt-3'>
                {
                    categories.map(category => 
                    <NavLink key={category.id} className={`hover:bg-base-200 py-3 font-semibold text-accent`} to={`/category/${category.id}`}>{category.name}</NavLink>
                )
                }
            </div>
        </div>
    );
};

export default Categories;