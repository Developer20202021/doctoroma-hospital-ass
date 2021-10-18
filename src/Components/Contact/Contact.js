import React from 'react';
import './Contact.css';




const Contact = () => {
    

        const imageUrl = 'https://i.ibb.co/nBjCm47/examining-sample-with-microscope.png';













    return (
        <div>
            <div className="contact-container">

            <div className="contact-headerImage">
                <img src={imageUrl} alt="" width='100%' height='270px'/>
            </div>


            <div className="contact-title">
                <h2>Contact Us</h2>
            </div>


            <div className="map-contactForm-container">

            <div className="map">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1634497065187!5m2!1sen!2sbd" width="800" height="450" ></iframe>
            </div>



            <div className="contactInfo-container">

            <div className="contactInfo">
                <h2>Contact With Us</h2>
                <p className='contact-more-info'>
                Everyday he has to make all kinds of decisions like what to wear, whom to date and when to panic.
                Now these decisions should be easy but if you take a look inside Herman’s head, you’ll see why he sometimes has trouble making up his mind. Sometimes they agree… usually they don’t. But the struggle is going on inside all of us and it’s all going on inside Herman’s head.
                </p>


                <h2>Contact INFO</h2>
                <p><span className='emailIcon'><i class="fas fa-paper-plane"></i></span> <span>doctoroma@hospital.com</span></p>
                <p><span className='phoneNumberIcon'><i class="fas fa-phone-alt"></i></span> <span>+12345677890</span></p>
                <p><span className='locationIcon'><i class="fas fa-map-marker-alt"></i></span> <span>New York City</span></p>



            </div>


            <div className="contact-form">

        <form action="" onSubmit>
            <div className="contact-fullName">
                <label htmlFor=""><span>Full Name</span></label> <br />
                <input type="text" name='fullName' placeholder='Enter your Name' />
            </div>
            <div className="contact-email">
                <label htmlFor=""><span>Email</span></label> <br />
                <input type="text" name='email' placeholder='Email'/>
            </div>
            <div className="contact-phone">
                <label htmlFor=""><span>Phone Number</span></label> <br />
                <input type="text" name='Phone Number' placeholder='Phone Number' />
            </div>

            <div className="contact-msg">
                <label htmlFor=""><span>Message</span></label><br />
                <textarea name="contactMsg" id="" cols="30" rows="10"></textarea>

            </div>

            <div className="contact-send-btn">
                <button >Send</button>
            </div>

        </form>







            </div>









            </div>








            </div>




















            </div>



            
        </div>
    );
};

export default Contact;