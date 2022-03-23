import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    return (
        <div>
            <div className="row container">
                {products.map((pd) => (
                    <SingleProducts key={pd.id} product={pd} ></SingleProducts>
                ))}
            </div>

        </div>
    );
};

export default AllProduct;