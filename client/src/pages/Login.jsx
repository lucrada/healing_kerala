import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigation = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const api_url = 'http://localhost:3000/cms/user/isLoggedIn';
    try {
      const response = await fetch(api_url, {
        method: 'GET',
        credentials: 'include',
      });
      let data = await response.json();
      if (data.message === 'LOGGED_IN') {
        // redirect to dashboard
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (await logIn()) {
      //redirect to dashboard
      console.log('logged in');
    } else {
      console.log('logged out');
    }
  }

  const logIn = async () => {
    const api_url = 'http://localhost:3000/cms/user/login';
    const body = { credentials: { username, password } };
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      if (data.message === 'LOGGED_IN') {
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return (
    <div>
      <div className="login-container">
        <svg className="login-icon" onClick={() => { navigation("/") }} >
          <use href="./assets/images/symbol-defs4.svg#icon-home"></use>
        </svg>
        <h1 className="login-heading">WELCOME TO THE LOGIN PAGE</h1>
        <div className="login">
          <form class="login__form " onSubmit={formHandler}>
            <label class="login__label" htmlFor="username">Username</label>
            <input value={username} onChange={(e) => { setUsername(e.target.value); }} class="login__input" type="text" name='username' placeholder='Username' required />

            <label class="login__label" htmlFor="password">Password</label>
            <input value={password} onChange={(e) => { setPassword(e.target.value); }} class="login__input" type="password" name='password' placeholder='Password' required />

            <button class="login__submit" type='submit'>Submit</button>
          </form>

        </div>


      </div>

    </div>
  )
}

export default Login
