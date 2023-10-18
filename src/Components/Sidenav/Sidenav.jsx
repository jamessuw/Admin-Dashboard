import './Sidenav.css'
import React, { useState } from 'react';

function Sidenav() {

 
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () =>{
        setIsOpen(!isOpen)
    };
    
  return (
    <div className='side-nav-container'>

        <div className='user-icon-container'>
            <div className='user-icon'></div>
            <span className='username'><h3>James Wijaya</h3></span>

        </div>
 
        <div className='container-link'>
            <button className='dropdown-button' onClick={toggleDropdown}><h2>Dashboard</h2></button>

            {!isOpen && (
                <div>
            <a href=""><h3>Sales Record</h3></a>
            <a href=""><h3>Purchase Order</h3></a>
            <a href=""><h3>Client</h3></a>
            <a href=""><h3>User Profle</h3></a>
            </div>
           )}
        </div>

      
    </div>
  )
}

export default Sidenav
