import React from 'react'
import { useNavigate } from 'react-router-dom'

const Popup = (props) => {

 let navigation = useNavigate();

  console.log(props.trigger)
  return props.trigger ? (
  
       <div className={`container ${props.trigger ? ' opened':' closed'}`}>
         <button className="close" onClick={()=>{props.triggerfn(false);
         }}><svg className="close__btn">
            <use href="./assets/images/symbol-defs3.svg#icon-radio-unchecked"></use>
          </svg></button>
         <div className="heading">
         <h1 className="heading__text">Who Are you?</h1>
         </div>
         <p className="paragraph">Please Select the type of User </p>
       <div className='popup'>
     
      <div className="popup__circle popup__circle--1">
      <svg className="popup__circle__icon  popup__circle__icon--1" onClick={()=>{
        if(props.triggertype == "login"){navigation("/login/User")}else if(props.triggertype == "signup"){navigation("/signup/User")}}}>
            <use href="./assets/images/symbol-defs3.svg#icon-users"></use>
          </svg>
       
      </div>
      <div className="popup__circle popup__circle--2"> <svg className="popup__circle__icon popup__circle__icon--2" onClick={()=>{
        if(props.triggertype == "login"){navigation("/login/Admin")}else if(props.triggertype == "signup"){navigation("/signup/Admin")}}
      
      }>
            <use href="./assets/images/symbol-defs3.svg#icon-triangle-down"></use>
          </svg>
   
        </div>
      <div className="popup__circle  popup__circle--3"> <svg className="popup__circle__icon popup__circle__icon--3" onClick={()=>{
        if(props.triggertype == "login"){navigation("/login/Doctor")}else if(props.triggertype == "signup"){navigation("/signup/Doctor")}}}>
            <use href="./assets/images/symbol-defs3.svg#icon-injection"></use>
          </svg></div>
      <div className="popup__circle popup__circle--4"> <svg className="popup__circle__icon popup__circle__icon--4" onClick={()=>{
        if(props.triggertype == "login"){navigation("/login/Taxi")}else if(props.triggertype == "signup"){navigation("/signup/Taxi")}}}>
            <use href="./assets/images/symbol-defs3.svg#icon-airplane"></use>
          </svg></div>
   
    </div>
       
      
    </div>
    
  ) : "";
}

export default Popup
