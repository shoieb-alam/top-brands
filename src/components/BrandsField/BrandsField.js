import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';
import './BrandsField.css'

const BrandsField = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('./items.JSON')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])



    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    brands.map(brand => <Brand
                        key={brand.key}
                        brand={brand}
                    ></Brand>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Ordered: </h5>
            </div>
        </div>
    );
};

export default BrandsField;