import React, { useEffect } from 'react';
import Dheader from '../components/common/Dheader';
import Slideshow from '../components/common/Slideshow';
import '../sass/pages/userdashboard.scss';
import Utilitybox from '../components/common/Utilitybox';
import { useNavigate } from 'react-router-dom';
import { getApiUrlFromRoute } from '../API';

const UserDashboard = () => {

  let navigation = useNavigate();

  useEffect(() => {
    checkAuthentication();
  });

  const checkAuthentication = async () => {
    const api_url = getApiUrlFromRoute('user/isLoggedIn');
    try {
      const response = await fetch(api_url, {
        method: 'GET',
        credentials: 'include',
      });
      let data = await response.json();
      if (data.message !== 'LOGGED_IN') {
        navigation(`/`);
      }
    } catch (_) { }
  };

  return (
    <div className="UDContainer">
      <Dheader userType='User' />
      <Slideshow />
      <Utilitybox />
      <div className="Bcontainer">
        <h1 className="Bcontainer__heading">Welcome to, Online Medical Tourism</h1>
        <p className="Bcontainer__description"> Health is our most precious treasure and we believe it should be a priviledge of all </p>
        <p className="Bcontainer__description">Asyour commited medical travel facilitator we wish to promote the highest standard health care </p>
        <p className="Bcontainer__description">on a global scale and guide patients towards the best medical solutions at an affordable rate </p>

        <button className="Dheader__btn utbtn">Learn More</button>

      </div>
    </div>
  )
}

export default UserDashboard;
