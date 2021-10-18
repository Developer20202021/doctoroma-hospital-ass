
import React, { useEffect, useState } from 'react';

import ADoctor from '../Services/Doctor/ADoctor';
import './Home.css';
import SingleService from './SingleService';










const Home = () => {


    const imageContainer = ['https://image.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg', 'https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg', 'https://image.freepik.com/free-photo/female-doctor-her-office-with-copy-space_23-2148947632.jpg'];



        const [getImage, setImage] = useState(imageContainer[0]);
     
        const [data, setData] = useState([]);

     

            useEffect(()=>{
                fetch('./data.json')
                .then(res=>res.json())
                .then(data=> setData(data))
            },[])


          

               



        let i = 0;
       useEffect(()=>{
        setInterval(()=>{
            if (i>2) {
                i=0;
                return
            }
            setImage(imageContainer[i])
       
            i++;
           

        },2000)
       },[])

      
    
    
      


  
    















    return (
        <div>

            <div className="home-container">

            <div className="slidebarContainer">

            <div className="slide-image-container">
                <div className="slide-image">
                <img src={getImage} alt="" />
                </div>
                <div className="slide-title">
                    <p>Doctoroma Hospital</p>
                </div>
            </div>


            </div>











            <div className="services-container">

                <h2 className='homeServiceHeader'>OUR SERVICES</h2>
                <div className='serviceBorder'><hr /></div>

                <div className="all-services">
                <div className="services">
                    {data.map(info=><SingleService key={info.id} info={info}></SingleService>)}
                </div>
                </div>



            </div>





            <div className="doctors-section-home"><h2 className='homeServiceHeader'>OUR DOCTORS</h2>
                <div className='serviceBorder'><hr /></div>

            <div className="doctor-in-home">


            {data[0]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[1]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[2]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[3]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[4]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[5]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}

            {data[6]?.teamMember?.map(doctor=> <ADoctor tInfo={doctor}></ADoctor>)}



















            </div>


















            </div>


























            </div>
            
        </div>
    );
};

export default Home;