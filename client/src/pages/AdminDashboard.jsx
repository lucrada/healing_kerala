import React from 'react'
import Dheader from '../components/common/Dheader'
import DateTime from '../components/common/DateandTime'
import AdminProfile from '../components/common/profile'
import Button from '../components/common/Button'
import "../sass/pages/admindashboard.scss";
const AdminDashboard = () => {
  return (
    <div className='AContainer'>
    <Dheader showbutton = "" />
    <DateTime/>
    <AdminProfile/>
    <div className="admin--buttons">

    <Button text = "Delete Doctor"/>
    <Button text = "Delete User"/>
    </div>
   
    </div>
  )
}

export default AdminDashboard
