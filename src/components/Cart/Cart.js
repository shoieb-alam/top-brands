import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const brand of cart) {
        total = total + brand.value;
    }
    const final = total.toFixed(2);
    return (
        <div className='cart bg-light m-3'>
            <h4>Calculation Summary</h4>
            <hr />
            <br />
            <p>Brand Counted: {props.cart.length} </p>
            <br />
            <h5>Total Brand Value: ${final} B </h5>
        </div>
    );
};

export default Cart;