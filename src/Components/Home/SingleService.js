

import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleService.css';







const SingleService = (props) => {


    const {imageUrl, serviceName, serviceDescription, id} = props.info;
    return (
        <div>
            <div className="service-container">
                <div className="service-img">
                    <img src={imageUrl} alt="" width='250px' height='200px' />
                </div>
                <div className="service-Name">
                    <h3>{serviceName}</h3>
                </div>
                <div className="service-details-btn">
                    <NavLink to={`/services/${id}`}>View Details</NavLink>
                </div>

            </div>
            
        </div>
    );
};

export default SingleService;