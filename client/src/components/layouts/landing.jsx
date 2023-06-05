import React from 'react'
import Header from '../common/Header'


const Landing = () => {




  return (
    <div>
     <Header/>
     <main>
      <div className="content">
       
          <nav className="sidenav">
            <ul className="sidenav__list">
              <li className="sidenav__item"><a href="#" className="sidenav__link"> <svg class="sidenav__icon">
                    <use href="assets/images/symbol-defs2.svg#icon-instagram"></use>
                </svg> </a></li>
              <li className="sidenav__item"><a href="#" className="sidenav__link"> <svg class="sidenav__icon">
                    <use href="assets/images/symbol-defs2.svg#icon-whatsapp"></use>
                </svg> </a></li>
              <li className="sidenav__item"><a href="#" className="sidenav__link"> <svg class="sidenav__icon">
                    <use href="assets/images/symbol-defs2.svg#icon-telegram"></use>
                </svg> </a></li>
              <li className="sidenav__item"><a href="#" className="sidenav__link"> <svg class="sidenav__icon">
                    <use href="assets/images/symbol-defs2.svg#icon-youtube"></use>
                </svg> </a></li>
            </ul>
          </nav>
    
        <div className="overview">
          <div className="upperview">
              <div className="upperview__container">
            <div className="upperview__animatedtext">

           <div className="wrapper">
            <div className="static">
              We Are
            </div>
            <ul className="dynamic">
              <li className="dynamic__text">Affordable</li>
              <li className="dynamic__text">Caring You</li>
              <li className="dynamic__text">Guiding U </li>
              <li className="dynamic__text">Loving You</li>
            </ul>
           
           </div>
           
            </div>
            <p className="upperview__text">Lets heal the world together</p> 
            </div>
          
            <img src="assets/images/heartimage.png" alt="" className="upperview__img" />
          </div>
          <div className="lowerview">
            <h2 className="lowerview__heading">
              Contact Us
            </h2>
            <ul className="lowerview__list">
              <li className="lowerview__items"><a href="#" className="lowerview__links">ABHIJITH</a></li>
              <li className="lowerview__items"><a href="#" className="lowerview__links">ABHIJITH</a></li>
              <li className="lowerview__items"><a href="#" className="lowerview__links">ABHIJITH</a></li>
              <li className="lowerview__items"><a href="#" className="lowerview__links">ABHIJITH</a></li>
            </ul>
            <div className="lowerview__logo">
      <img src="assets/images/healkerala.jpg" alt="logo" className="lowerview__img" />
        <span className="lowerview__text">Healing Kerala</span>
      </div>
      <p className="lowerview__copyright">Copyright 2001 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
     </main>
   
    </div>
  )
}

export default Landing;
