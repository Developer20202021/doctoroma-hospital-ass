import React, { useState } from 'react';
import './Gallery.css';











const Gallery = () => {

    const galleryHeaderImageUrl = 'https://image.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg';




        const [toggleItem, setToggleItem] = useState(1);

    const galleryItemToogle = (number)=>{

        setToggleItem(number);

    }



    return (
        <div>
            <div className="gllery-container">

            <div className="gallery-header-image-container">
          <div className="gallery-image">
          <img src={galleryHeaderImageUrl} alt="" />
          </div>
                <div className="gallery-title">
                    <p>Gallery</p>
                </div>
            </div>




            <div className="ourGallery-container">
                <div className="subGallery-title-link">
                    <ul>
                        <li><a onClick={()=>galleryItemToogle(1)}>Facility</a></li>
                        <li><a onClick={()=>galleryItemToogle(2)} >Hospital</a></li>
                        <li><a onClick={()=>galleryItemToogle(3)} >Doctors</a></li>
                    </ul>
                </div>



                    {toggleItem==1 ? 
                <div className="gallery-items">

                <div className="our-gallery-card">
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://img.freepik.com/free-photo/specialist-neurologist-doctor-taking-notes-laptop-asking-patient-s-symptoms-adjusting-high-tech-eeg-headset-doctor-researcher-controlling-eeg-headset-analyzing-brain-functions-health-status_482257-16448.jpg?size=338&ext=jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Nephrologist Care</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/child-docto-rs-office_1098-19672.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Pediatrician Clinic</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-vector/gynecology-consultation-illustration_23-2148653151.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Gyn and Obs Care</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/child-eye-test-eye-exam-little-girl-having-eye-check-up-with-phoropter-doctor-performs-eye-test-child_1157-41952.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Eye Care</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://img.freepik.com/free-photo/portrait-doctor_144627-39413.jpg?size=338&ext=jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Radiology Clinic</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/heart-banner-cardiac-technology_53876-104942.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Cardiologis Care</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://as2.ftcdn.net/v2/jpg/00/40/95/67/500_F_40956732_UWvRGj8KWKOpSt0UafdXl5gtbNhWH3ic.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Gastrologist Care</p>
                        </div>
                    </div>

                </div>

                </div>:null}



                {toggleItem==2?


                <div className='gallery-items'>


                    <div className='our-gallery-card'>

                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/large-modern-office-building_1127-3072.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Hospital building</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/medical-nurse-talking-with-patient-phone-about-diagnosis-health-care-physician-sitting-desk-using-computer-modern-clinic-looking-monitor_482257-6982.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Office Room</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Operation Room</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/patients-asking-help-filling-dental-registration-form-preparing-exemination-senior-woman-sitting-chair-waiting-area-crowded-orthodontist-office-while-doctor-working-background_482257-13495.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Reception</p>
                        </div>
                    </div>

                </div>
                </div>:null}



                {toggleItem==3?

                <div className='gallery-items'>

                    <div className='our-gallery-card'>

                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Verdina sing</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/portrait-cheerful-young-medical-doctor-with-stethoscope-smiling-standing-wth-arms-crossed-isolated-white-wall_171337-99769.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Nel Patel</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Peter Son</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Kabir Hasan</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Herik Son</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/confident-dentist-stomatology-cabinet-with-orange-equiptment-wearing-dental-uniform-medical-specialist-oral-hygiene-wearing-lab-coat-looking-camera-dentistry-office_482257-16216.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Howrad Stern</p>
                        </div>
                    </div>
                    <div className="oneGalleryCard">
                        <div className="gallery-img">
                            <img src="https://image.freepik.com/free-photo/portrait-doctor_144627-39390.jpg" alt="" />
                        </div>
                        <div className="services-title">
                        <p>Dr.Smit Sen</p>
                        </div>
                    </div>






                </div>
                
                </div>:null}






            </div>












            </div>
            
        </div>
    );
};

export default Gallery;