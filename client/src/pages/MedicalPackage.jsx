import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dheader from '../components/common/Dheader';
import Cards from '../components/common/Cards';
import { getApiUrlFromRoute } from '../API';
import '../sass/pages/medicalpackage.scss';

const MedicalPackage = () => {
  let navigation = useNavigate();
  let { id } = useParams();
  let type = id.toLowerCase();

  const [packages_, setPackages] = useState([]);

  useEffect(() => {
    checkAuthenticationAndFetchPackages();
  }, []);

  const checkAuthenticationAndFetchPackages = async () => {
    const api_url = getApiUrlFromRoute('user/isLoggedIn');
    try {
      const response = await fetch(api_url, {
        method: 'GET',
        credentials: 'include',
      });
      let data = await response.json();
      if (data.message !== 'LOGGED_IN') {
        navigation('/login/User');
      }
      await fetchPackages();
    } catch (_) { }
  };

  const fetchPackages = async () => {
    const api_url = getApiUrlFromRoute('package/filtered-packages');
    const body = { type };
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      if (data.message === 'NOT_AUTHENTICATED') {
        navigation('/login/User');
        return;
      }
      if (data.message === 'FAILED_TO_FETCH_PACKAGES') {
        alert('Failed to fetch the packages, check network connection');
        return;
      }
      setPackages(data.message);
    } catch (_) { }
  }

  const showPaymentWindow = () => {
    document.getElementsByClassName('payment_window')[0].style.visibility = 'visible';
  }

  const hidePaymentWindow = () => {
    document.getElementsByClassName('payment_window')[0].style.visibility = 'hidden';
  }

  return (
    <div className='MContainer'>
      <div className='payment_window'>
        <button id='confirmButton' className='payment_window__confirm-btn'>Confirm Payment</button>
      </div>
      <Dheader userType='User' showbutton="True" />
      <h1 className='packageHeading'>{`${id} PACKAGES`} </h1>
      <div className="cardContainer">
        {packages_.length === 0 ? (
          <h1>No packages are available!</h1>
        ) : (
          packages_.map((pack) => <Cards key={pack._id} cancerdetails1={pack} showWindowFunctionCall={showPaymentWindow} hideWindowFunctionCall={hidePaymentWindow} />)
        )}
      </div>

    </div>
  )
}

export default MedicalPackage;
