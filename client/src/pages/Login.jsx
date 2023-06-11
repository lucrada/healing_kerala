import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
const Login = () => {

    let navigation = useNavigate();
    let location = useLocation();
    let curpath = location.pathname;
    let { id } = useParams();
    console.log(`parameter: ${id}`);
  return (
    <div>
      <div className="login-container"> 
      <svg className="login-icon" onClick={()=>{navigation("/")}} >
            <use href="/assets/images/symbol-defs4.svg#icon-home"></use>
          </svg>
      <h1 className="login-heading">WELCOME TO THE LOGIN PAGE</h1>
      <div className="login">
         <form className="login__form " action="">
             <label className="login__label" htmlFor="username">Username</label>
            <input className="login__input" type="text"  name='username' placeholder='Username' required/>

            <label className="login__label" htmlFor="password">Password</label>
            <input className="login__input" type="password"  name='password' placeholder='Password' required />
              
            <button className="login__submit" type='submit' onClick={()=>{navigation(`${curpath}/dashboard`)}}>Submit</button>
         </form>

      </div>
      
      
      </div>
     
    </div>
  )
}

export default Login
