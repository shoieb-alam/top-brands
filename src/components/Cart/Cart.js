import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const brand of cart) {
        total = total + brand.value;
    }
    return (
        <div className='border border-dark rounded-3 p-2 bg-light m-3 h-25'>
            <h4>Calculation Summary</h4>
            <br />
            <br />
            <p>Brand Counted: {props.cart.length} </p>
            <br />
            <h5>Total Brand Value: ${total}B </h5>
        </div>
    );
};

export default Cart;