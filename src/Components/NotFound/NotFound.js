import React from 'react';
import './NotFound.css'
import notFoundImage from './not-found-404.png';
import { useHistory } from 'react-router';









const NotFound = () => {


        const history = useHistory();
        const goToHome = ()=>{
            history.push('/home');

        }



    return (
        <div>

            <div className="not-found-container">

            <div className="not-image-container">
                <img src={notFoundImage} alt="" />
            </div>


            <div className="homePageBtn">
                <button onClick={goToHome} className='home-page'>Go To Home Page</button>
            </div>



            </div>
            
        </div>
    );
};

export default NotFound;