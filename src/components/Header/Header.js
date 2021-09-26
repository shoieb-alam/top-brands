import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header py-3'>
            <h2>MOST VALUABLE BRANDS</h2>
            <h6>Here are the some of World’s Most Valuable Brands, which looks at the top 100 companies by Forbes</h6>
            <h4>Total Budget: <span className='fw-bold'>$100 Billion</span></h4>
        </div>
    );
};

export default Header;