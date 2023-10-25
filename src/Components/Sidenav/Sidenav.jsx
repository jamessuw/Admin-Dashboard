import './Sidenav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div className={`side-nav-container ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='toggle-button' onClick={toggleVisibility}>
        <div className='hamburger-menu' onClick={toggleVisibility}>
                <div className={`bar ${isVisible ? 'change' : ''}`}></div>
                <div className={`bar ${isVisible ? 'change' : ''}`}></div>
                <div className={`bar ${isVisible ? 'change' : ''}`}></div>
            </div>
        </div>



            <div className='user-icon-container'>
                <div className='user-icon'></div>
                <span className='username'>
                    <h3>James Wijaya</h3>
                </span>
            </div>

            <div className='container-link'>
                <button className='dropdown-button' onClick={toggleDropdown}>
                    <h2 className='h2-nav'>Dashboard</h2>
                </button>

                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                <Link to="/admin"> {/* Navigate to the appropriate route */}
                        <h4>Overview</h4>
                    </Link>
                <Link to="/sales-record"> {/* Navigate to the appropriate route */}
                        <h4>Sales Record</h4>
                    </Link>
                    <Link to="/purchase-order">
                        <h4>Purchase Order</h4>
                    </Link>
                    <Link to="/client">
                        <h4>Client</h4>
                    </Link>
                    <Link to="/user-profile">
                        <h4>User Profile</h4>
                    </Link>
                    <Link to="/create-form"> {/* Navigate to the Create Form route */}
                        <h4>Create Form</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidenav;
