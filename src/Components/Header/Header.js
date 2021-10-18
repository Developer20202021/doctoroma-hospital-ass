import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../AuthContext/useAuthContext';
import './Header.css';
import logo from './log-doctoroma.svg';







const Header = () => {

    const {user,logOut} = useAuthContext();
    // console.log(user.email);

    
    const logOutUser = ()=>{
        logOut();
        
    }





    return (
        <div>

            <div className="header">
                
            <div className="header-container">

                <div className="logo-container">
                <img src={logo} alt="" width='300px'/>

                </div>


                <div className="link-container">
                    <NavLink activeStyle={{
                        borderBottom:'2px solid white'
                    }} to='/home'>Home</NavLink>
                    <NavLink activeStyle={{
                        borderBottom:'2px solid white'
                    }} to='/gallery'>Gallery</NavLink>
                    <NavLink activeStyle={{
                        borderBottom:'2px solid white'
                    }} to='/contact'>Contact</NavLink>
                    {!user?.displayName?<span className='user-email'>{user.email}</span>:<span className='user-email'>{user.displayName}</span>}
                    {user?.email?<button className='logOutBtn' onClick={logOutUser}>Log Out</button>: <NavLink activeStyle={{
                        borderBottom:'2px solid white'
                    }} to='/login'>Log In</NavLink>}

                    {user.photoURL?<img src={user.photoURL} alt="" width='50px' height='50px' />:null}
                   
                   
                </div>






</div>
            </div>
            
        </div>
    );
};

export default Header;