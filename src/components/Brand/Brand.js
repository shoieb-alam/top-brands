import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import './Brand.css'

const Brand = (props) => {
    const { rank, img, name, value, revenue, industry, url } = props.brand;
    const element = <FontAwesomeIcon icon={faCalculator} />

    return (
        <div className='brand text-center border border-dark py-3 m-3 rounded-3'>
            <img className='w-25 h-25' src={img} alt="" />
            <div className=''>
                <h5 className='my-3'> {name} </h5>
                <p>Rank: {rank} </p>
                <p>Brand Value: ${value} B</p>
                <p>Brand Revenue: {revenue}</p>
                <p>Industry type: {industry}</p>
                <p>Visit: <a href={url} target="_blank" rel='noreferrer'>{url}</a></p>

                <button
                    onClick={() => props.handleAddtoCount(props.brand)} type="button" className="btn btn-danger mb-4">{element} Add to Count</button>

            </div>
        </div>
    );
};

export default Brand;