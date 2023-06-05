import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    let navigation = useNavigate();
  return (
    <div>
      <div className="login-container"> 
      <svg className="login-icon" onClick={()=>{navigation("/")}} >
            <use href="./assets/images/symbol-defs4.svg#icon-home"></use>
          </svg>
      <h1 className="login-heading">WELCOME TO THE LOGIN PAGE</h1>
      <div className="login">
         <form class="login__form " action="">
             <label class="login__label" htmlFor="username">Username</label>
            <input class="login__input" type="text"  name='username' placeholder='Username' required/>

            <label class="login__label" htmlFor="password">Password</label>
            <input class="login__input" type="password"  name='password' placeholder='Password' required />
              
            <button class="login__submit" type='submit'>Submit</button>
         </form>

      </div>
      
      
      </div>
     
    </div>
  )
}

export default Login
