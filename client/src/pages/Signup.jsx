import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  let navigation = useNavigate();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

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
        console.log('signed up');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (await signUp()) {
      //redirect to dashboard
      console.log('signed up');
    } else {
      console.log('logged out');
    }
  }

  const signUp = async () => {
    const api_url = 'http://localhost:3000/cms/user/register';
    const body = {
      member: {
        first_name,
        last_name,
        username,
        email,
        password,
        phone,
        gender,
        country
      }
    };
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

  // check currently logged in
  // if yes redirect to dashboard

  // sign up api call and redirect to dashboard

  // validation

  return (
    <div>
      <div className="login-container">
        <svg className="login-icon" onClick={() => { navigation("/") }} >
          <use href="./assets/images/symbol-defs4.svg#icon-home"></use>
        </svg>
        <h1 className="login-heading">WELCOME TO THE SIGNUP PAGE</h1>
        <div className="login signup">
          <form class="login__form signup__form" onSubmit={formHandler}>
            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">First Name</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='First Name' value={first_name} onChange={(e) => { setFirstName(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Last Name</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Last Name' value={last_name} onChange={(e) => { setLastName(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Username</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Email</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Password</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Phone</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Gender</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Gender' value={gender} onChange={(e) => { setGender(e.target.value) }} required /></div>

            <div className="signup__block"><label class="login__label signup__label" htmlFor="username">Country</label>
              <input class="login__input signup__input" type="text" name='username' placeholder='Country' value={country} onChange={(e) => { setCountry(e.target.value) }} required /></div>

            <button class="login__submit" type='submit'>Submit</button>
          </form>

        </div>


      </div>

    </div>
  )
}

export default Signup
