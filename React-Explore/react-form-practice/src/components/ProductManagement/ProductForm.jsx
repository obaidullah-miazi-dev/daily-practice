import React from 'react';

const ProductForm = ({addNewProduct}) => {

    const handleSubmission = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name,price,quantity);
        const newProduct = {
            name,
            price,
            quantity
        }
        addNewProduct(newProduct);
    }
    return (
        <div>
            <h1 className='font-bold px-5 mb-3 text-2xl'>Add a Product </h1>
            <form className='space-y-2 m-5' onSubmit={handleSubmission}>
                <input className='outline' type="text" name="name" placeholder='Product Name'/>
                <br />
                <input className='outline' type="text" name="price" placeholder='Product Price'/>
                <br />
                <input className='outline' type="text" name="quantity" placeholder='Product Quantity'/>
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;