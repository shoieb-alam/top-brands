import React from 'react';
import './Brand.css'

const Brand = (props) => {
    // console.log(props.brand);
    const { rank, img, name, value, revenue, industry, url } = props.brand;
    return (
        <div className='text-center border border-dark py-3 bg-light m-3 rounded-3'>
            <img className='w-25 h-25' src={img} alt="" />
            <div className=''>
                <h5 className='my-3'> {name} </h5>
                <p>Rank: {rank} </p>
                <p>Brand Value: ${value} B</p>
                <p>Brand Revenue: {revenue}</p>
                <p>Industry type: {industry}</p>
                {/* <p>Visit: {url}</p> */}
                <p>Visit: <a href={url} target="_blank" rel='noreferrer'>{url}</a></p>
                {/* <button className='btn-regular'>add to cart</button> */}
                <button
                    onClick={() => props.handleAddtoCount(props.brand)} type="button" className="btn btn-outline-dark mb-4">Add to Count</button>

            </div>
        </div>
    );
};

export default Brand;