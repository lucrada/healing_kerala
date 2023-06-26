import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dheader = (props) => {
  let navigation = useNavigate();


  return (
    <div className='Dheader'>
      <div className="logo">
      
      <img src="/assets/images/healkerala.jpg" alt="logo" className="logo__img Dheader__img" />
        <span className="Dheader__text">Healing Kerala</span>
      </div>

      {props.showbutton && <button className= "Dheader__btn" onClick={()=>{navigation("/login/User/dashboard")}}>DASHBOARD
       <svg className="Dheader__icon" >
            <use href="/assets/images/symbol-defs.svg#icon-key"></use>
          </svg></button>}
    
       <button className= "Dheader__btn" onClick={()=>{navigation("/")}}>Logout
       <svg className="Dheader__icon" >
            <use href="/assets/images/symbol-defs.svg#icon-key"></use>
          </svg></button>

        
    </div>
  )
}

export default Dheader
