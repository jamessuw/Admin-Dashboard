import './Sidenav.css';
import React, { useState } from 'react';

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='side-nav-container'>
            <div className='user-icon-container'>
                <div className='user-icon'></div>
                <span className='username'>
                    <h3>James Wijaya</h3>
                </span>
            </div>

            <div className='container-link'>
                <button className='dropdown-button' onClick={toggleDropdown}>
                    <h2>Dashboard</h2>
                </button>

                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                    <a href="">
                        <h4>Sales Record</h4>
                    </a>
                    <a href="">
                        <h4>Purchase Order</h4>
                    </a>
                    <a href="">
                        <h4>Client</h4>
                    </a>
                    <a href="">
                        <h4>User Profle</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidenav;
