import React from 'react';
import '../../sass/components/Cards.scss';

const Cards = (props) => {
  return (
    <div className='cards'>
      <div className="cards__side cards__side--front">
        <div className={`cards__picture cards__picture-${props.cancerdetails1.picture}`}>
       
        </div>
        <h4 className="cards__heading">
          Dr <span>{props.cancerdetails1.name}</span>
          
          {/* data from database */}
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
       
        
        <button className="cards__cta__btn">BOOK NOW</button>
       </div>
      </div> 

    </div>
  )
}

export default Cards
