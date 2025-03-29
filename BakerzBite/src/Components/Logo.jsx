import txt from "../assets/Logo.png"
import close from "../assets/close.svg"
import hamburger from "../assets/hamburger.svg"
import { useState } from 'react';

function Logo() {
  const [ShowHamburger, setShowHamburger] = useState(false)
  return (
    <div className="logo-body">
        <div className='header-logo'>
            <img src={txt} alt="" className="logo" />
        </div>




        <div className="hamburger-menu">
          <img src={ShowHamburger? close: hamburger} alt="hamburger icon" className="ham-icon" width={25} height={25}  onClick={()=> setShowHamburger(!ShowHamburger)} />

          {
          ShowHamburger && (
              <ul className="hamburger">
              <li><a href="#Hero">HOME</a></li>
              <li><a href="#Cake">CAKES</a></li>
              <li><a href="#Pastry">PASTRY</a></li>
              <li><a href="#Merch">MERCHANDISE</a></li>
              <li><a href="#Contact">CONTACT</a></li>
              <li><a href="#About">ABOUT</a></li>
          </ul>
          )
          }
        </div>  
    </div>
    
  )
}

export default Logo