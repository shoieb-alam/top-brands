import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // const { brands } = props;

    let total = 0;
    for (const brand of cart) {
        total = total + brand.value;
    }
    const final = total.toFixed(2);

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
            <h6> <span className='fw-bold'>Added Brands:</span>{name}</h6>
            <br />
            <h5>Total Brand Value: ${final} B </h5>
        </div>
    );
};

export default Cart;