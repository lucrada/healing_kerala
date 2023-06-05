import React from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    
    let navigation = useNavigate();
  return (
    <div>
       <div className="login-container"> 
      <svg className="login-icon" onClick={()=>{navigation("/")}} >
            <use href="./assets/images/symbol-defs4.svg#icon-home"></use>
          </svg>
      <h1 className="login-heading">WELCOME TO THE SIGNUP PAGE</h1>
      <div className="login signup">
         <form class="login__form signup__form" action="">
             <div className="signup__block"><label class="login__label signup__label" htmlFor="username">First Name</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='First Name' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Last Name</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Last Name' required/></div>

             <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Username</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Username' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Email</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Email' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Password</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Password' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Phone</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Phone' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Gender</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Gender' required/></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Country</label>
            <input class="login__input signup__input" type="text"  name='username' placeholder='Country' required/></div>
              
            <button class="login__submit" type='submit'>Submit</button>
         </form>

      </div>
      
      
      </div>
     
    </div>
  )
}

export default Signup
