import React from 'react';
import './ADoctor.css';




const ADoctor = (props) => {

 
const {doctorImage, name, spaciality} = props.tInfo;






    return (
        <div>
            <div className="doctor-image-container">
            <div className="doctor-image">
                <img src={doctorImage} alt="" />
            </div>

            <div className="doctor-name">
                <h3>{name}</h3>
            </div>

            <div className="doctor-spaciality">
                <p>{spaciality}</p>
            </div>
            </div>
        </div>
    );
};

export default ADoctor;