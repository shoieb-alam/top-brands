import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    //Total Amount Calculation
    let sum = 0;
    for (const brand of cart) {
        sum = sum + brand.value;
    }
    const total = sum.toFixed(2);

    let name = '';
    for (const brand of cart) {
        name = name + ' ' + brand.name;
    }
    return (
        <div className='cart bg-light m-3'>
            <h4>Calculation Summary</h4>
            <hr />
            <br />
            <h6><span className='fw-bold'>Brand Counted:</span> {props.cart.length} </h6>
            <br />
            <h5>Total Brand Value: ${total} B </h5>
            <br />
            <h6> <span className='fw-bold'>Added Brands:</span>{name}</h6>
            <br />
        </div>
    );
};

export default Cart;