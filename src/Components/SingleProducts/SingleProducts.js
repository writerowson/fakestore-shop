import React from 'react';
import './SingleProducts.css'
const SingleProducts = ({ product }) => {
    console.log(product);
    return (
        <div className='col-md-4'>
            <div className="card border p-3">
                <img className='w-50 m-auto' src={product.image} alt="" />
                <h1>{product.title.slice(0, 20)}</h1>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success'>ADD to cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-primary'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;