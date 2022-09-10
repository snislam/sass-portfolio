import React from 'react';
import '../styles/css/serviceCard.min.css';

const ServicesCard = ({ service }) => {
    const { name, price, description } = service;
    return (
        <div className='service-card'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{ description}</p>
        </div>
    );
};

export default ServicesCard;