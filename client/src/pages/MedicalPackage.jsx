import React from 'react';
import Dheader from '../components/common/Dheader';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Cards from '../components/common/Cards';
import '../sass/pages/medicalpackage.scss';

const MedicalPackage = () => {
    let location = useLocation();
    let curpath = location.pathname;
    let { id } = useParams();
    let typeOfSurgery = id.toUpperCase();
    let cancerdetails1 = {name:"Angela Yu MBBS,MD ",
  speciality : `SPECIALIST IN ${typeOfSurgery} SURGERY`,
hospital: "ASTER MIMS,KOZHIKODE",
duration : "DURATION 2 MONTHS",
hotel: "STAY IN MARRIOT HOTEL",
extra : "SAFE AND RELIABLE",
price: "$199",
backbg:"1",
picture:"1"
}

let cancerdetails2 = {name:"Angela Yu MBBS,MD ",
speciality : `SPECIALIST IN ${typeOfSurgery} SURGERY`,
hospital: "ASTER MIMS,KOZHIKODE",
duration : "DURATION 2 MONTHS",
hotel: "STAY IN MARRIOT HOTEL",
extra : "SAFE AND RELIABLE",
price: "$250",
backbg:"2",
picture:"2"
}

let cancerdetails3 = {name:"Angela Yu MBBS,MD ",
speciality : `SPECIALIST IN ${typeOfSurgery} SURGERY`,
hospital: "ASTER MIMS,KOZHIKODE",
duration : "DURATION 2 MONTHS",
hotel: "STAY IN MARRIOT HOTEL",
extra : "SAFE AND RELIABLE",
price: "$450",
backbg:"3",
picture:"3"
}
       
  return (
    <div className='MContainer'>
      <Dheader/>
      <h1 className='packageHeading'>{`${id} PACKAGES`} </h1>
      <div className="cardContainer">
      <Cards cancerdetails1 = {cancerdetails1} />
      <Cards cancerdetails1 = {cancerdetails2} />
      <Cards cancerdetails1 = {cancerdetails3} />
      </div>
      
    </div>
  )
}

export default MedicalPackage;
