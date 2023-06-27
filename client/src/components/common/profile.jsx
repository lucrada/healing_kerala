import React from 'react';
import "../../sass/components/profile.scss";

const AdminProfile = () => {
  return (
    <div className="admin">
    <h2 className="admin--heading">Administrator Panel</h2>
    <div className="admin--profile">

    <div className="admin--avatar">
        <img className="admin--avatar--photo"src="/assets/images/admin.jpg" alt="Admin Avatar" />
        <p className="admin--avatar--name">Abhijith J Pillai</p>
     </div>
     
     <div className="admin--avatar">
        <img className="admin--avatar--photo"src="/assets/images/admin.jpg" alt="Admin Avatar" />
        <p className="admin--avatar--name">Joyal Mathew</p>
     </div>

     <div className="admin--avatar">
        <img className="admin--avatar--photo"src="/assets/images/admin.jpg" alt="Admin Avatar" />
        <p className="admin--avatar--name">Abhijith K A</p>
     </div>

     <div className="admin--avatar">
        <img className="admin--avatar--photo"src="/assets/images/admin.jpg" alt="Admin Avatar" />
        <p className="admin--avatar--name">Abhijith D</p>
     </div>

    </div>
    
     </div>
  );
};

export default AdminProfile;
