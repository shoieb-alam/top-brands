import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';
import Cart from '../Cart/Cart';
import './BrandsField.css'

const BrandsField = () => {
    const [brands, setBrands] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./items.JSON')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    const handleAddtoCount = (brand) => {
        const newCount = [...cart, brand];
        setCart(newCount);
    }

    return (
        <div className="brandField-container">
            <div className="brand-container">
                {
                    brands.map(brand => <Brand
                        key={brand.key}
                        brand={brand}
                        handleAddtoCount={handleAddtoCount}
                    ></Brand>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    brands={brands}
                ></Cart>
            </div>
        </div>
    );
};

export default BrandsField;