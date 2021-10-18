import React from 'react';
import './Footer.css';
import logo from '../Header/log-doctoroma.svg'








const Footer = () => {
    return (
        <div>
            <div className="footer">

            <div className="footer-container">

            <div className="footer-logo-info">
                <div className="footer-logo">
                <img src={logo} alt="" />
                </div>

                <p className='footer-sub-title'>My kinda people, my kinda place. There's something special about this place.</p>



                <div className="footer-location">
                    <div className="street">
                        <p>Hospital+
                        33 Farlane Street
                        Keilor East
                        VIC 3033, New York</p>
                    </div>
                    <div className="online">
                        <p>+12313142134</p>
                        <p>doctoroma@hospital.com</p>
                    </div>
                </div>
            </div>




            <div className="subscribe">

            <h3>Stay With Us</h3>

            <div className="subscribe-form">
                <input type="text" name="fullName" id="" placeholder='Fullname'/><br />
                <input type="email" name="email" id="" placeholder='Email'/>
                <div className="subscribe-btn">
                    <button>SUBSCRIBE</button>
                </div>

            </div>
            </div>








            </div>

















            <hr />

            <div className="copyright">
                <p>© 2021 Doctoroma Hospital.</p>
            </div>

            </div>
            
        </div>
    );
};

export default Footer;