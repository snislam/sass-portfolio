import React, { useEffect, useState } from 'react';
import '../styles/css/services.min.css';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeServices.json')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])

    return (
        <div id='services'>
            <h2>My Services</h2>
            <div className='service-item'>
                {
                    services?.map(s=> <ServicesCard key={s._id} service={s} />)
                }
            </div>
        </div>
    );
};

export default Services;