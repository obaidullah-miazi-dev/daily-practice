import React from 'react';

const ProductTable = ({ products }) => {
    console.log(products);
    return (
        <div>
            <h1 className='font-bold px-5 mb-3 text-2xl'>Total Products: {products.length}</h1>
            <div className="overflow-x-auto px-5">
                <table className="table bg-amber-50">
                    <thead>
                        <tr>
                            <th className='outline border-t-2 text-black'>No.</th>
                            <th className='outline border-t-2 text-black'>Product Name</th>
                            <th className='outline border-t-2 text-black'>Product Price</th>
                            <th className='outline border-t-2 text-black'>Product Quantity</th>
                        </tr>
                    </thead>
                    {
                        products.map((p, index) => <tbody>
                            <tr>
                                <td className='outline border-b-2'>{index + 1}</td>
                                <td className='outline border-b-2'>{p.name}</td>
                                <td className='outline border-b-2'>{p.price}</td>
                                <td className='outline border-b-2'>{p.quantity}</td>
                            </tr> </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ProductTable;