import React from "react";
import './Navigation.css';
import Logo from '../../brandLogo.png'


function NavigationBar() {
  return (
    <div>
  <body>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <img className ="brandLogo" src ={Logo} alt ="brand-Logo"/>
          </div>
          <div class="menu-items">
            <li>Home</li>
            <li>about Us</li>
            <li>portfolio</li>
            <li>contact</li>
          </div>
        </div>
      </div>
    </nav>
  </body>    </div>
  );
}

export default NavigationBar;
