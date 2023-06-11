import React from 'react';
import Dheader from '../components/common/Dheader';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MedicalPackage = () => {
    let location = useLocation();
    let curpath = location.pathname;
    let { id } = useParams();
    console.log(id);
       
  return (
    <div>
      <Dheader/>
    </div>
  )
}

export default MedicalPackage
