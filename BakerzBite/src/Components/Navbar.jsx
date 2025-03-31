import React, { Component } from 'react'
import { useState } from 'react';


    function Navbar() {
        const [ShowHamburger, setShowHamburger] = useState(false)
        return (
            <>
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li><a href="#Hero">HOME</a></li>
                        <li><a href="#Cake">CAKES</a></li>
                        <li><a href="#Pastry">PASTRY</a></li>
                        <li><a href="#Merch">MERCHANDISE</a></li>
                        <li><a href="#Contact">CONTACT</a></li>
                        <li><a href="#About">ABOUT</a></li>
                    </ul>

                    <div className='visitor-count'>
                        visitors count: 1500
                    </div>  
                </nav>




            </>
            
        );
    }

export default Navbar