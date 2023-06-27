import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getApiUrlFromRoute } from '../../API';
const Dheader = (props) => {
  let navigation = useNavigate();

  const logout = async () => {
    const api_url = getApiUrlFromRoute(`${props.userType.toLowerCase()}/logout`);
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.message === 'LOGGED_OUT') {
        navigation(`/login/${props.userType}`)
      }
    } catch (_) { }
  }

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
    
       <button className= "Dheader__btn" onClick={logout}>Logout
       <svg className="Dheader__icon" >
            <use href="/assets/images/symbol-defs.svg#icon-key"></use>
          </svg></button>

        

    </div>
  )
}

export default Dheader
