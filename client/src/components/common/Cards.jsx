import React, { useState } from 'react';
import '../../sass/components/Cards.scss';
import { getApiUrlFromRoute } from '../../API';

const Cards = (props) => {
  const id = props.cancerdetails1._id;

  const confirmPayment = () => {
    return new Promise((resolve, _) => {
      const confirmButton = document.getElementById('confirmButton');

      const handleConfirm = () => {
        resolve();
      }

      confirmButton.addEventListener('click', handleConfirm);
    });
  }

  const handleBooking = async () => {
    props.showWindowFunctionCall();
    await confirmPayment();
    props.hideWindowFunctionCall();
    const api_url = getApiUrlFromRoute('package/book');
    const body = { packageId: id };
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
      if (data.message === 'BOOKING_FAILED') {
        alert('booking failed, please check your network');
        return;
      }
      alert('package booked');
      window.location.reload();
    } catch (_) { }
  }

  return (
    <div className='cards'>
      <div className="cards__side cards__side--front">
        <div className={`cards__picture cards__picture-${props.cancerdetails1.picture}`}>

        </div>
        <h4 className="cards__heading">
          Dr <span>{props.cancerdetails1.name}</span>
        </h4>

        <div className="cards__details">
          <ul>
            <li>{props.cancerdetails1.speciality} </li>
            <li>{props.cancerdetails1.hospital}</li>
            <li>{props.cancerdetails1.duration}</li>
            <li>{props.cancerdetails1.hotel}</li>
            <li>{props.cancerdetails1.extra}</li>
          </ul>
        </div>
      </div>
      <div className={`cards__side cards__side--back cards__side--back-${props.cancerdetails1.backbg}`}>
        <div className="cards__cta">

          <p className='cards__cta__only'>Only</p>
          <p className='cards__cta__value'>{props.cancerdetails1.price}</p>


          <button onClick={handleBooking} className="cards__cta__btn">BOOK NOW</button>
        </div>
      </div>

    </div>
  )
}

export default Cards
