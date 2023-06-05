import React from 'react'
import Popup from '../common/Popup';
import { useState } from 'react';
const Header = () => {

  const [buttonPopup,setButtonPopup] = useState(false);
  const [type,setType] = useState("");

  return (
    <div>
      <nav className="header">
      <div className="logo">
      <img src="assets/images/healkerala.jpg" alt="logo" className="logo__img" />
        <span className="logo__text">Healing Kerala</span>
      </div>
       
        <form action="" className="search">
          <input type="text" className="search__input" placeholder='Search' />
          <button className="search__btn">
          <svg className="search__icon">
            <use href="./assets/images/symbol-defs.svg#icon-search"></use>
          </svg>
          </button>
        </form>
        <div className="user-nav">

         <button className="user-nav__btn" onClick={() => {setButtonPopup(true);setType("login")}}>Login in
         <svg className="user-nav__icon" >
            <use href="./assets/images/symbol-defs.svg#icon-key"></use>
          </svg>
         </button>
       
       
       <button className="user-nav__btn" onClick={() => {setButtonPopup(true);setType("signup")}}>Signup<svg className="user-nav__icon">
            <use href="./assets/images/symbol-defs.svg#icon-aid-kit"></use>
          </svg></button>
        
       
        </div>
        
      </nav>

      <Popup  trigger={buttonPopup} triggerfn ={setButtonPopup} triggertype = {type}/>
    </div>
  )
}

export default Header
