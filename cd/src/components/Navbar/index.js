import React from 'react';
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar">
       <img src="https://res.cloudinary.com/dpfnim7rk/image/upload/v1729754367/logo_6514051e85aa74-51802320_b91rw1.png" alt="Logo" className="logo" /> 

{/* <h4>Outlook 365</h4> */}
<div className="nav-links">
        <div className="nav-item">Outlook</div>   
        <div className="nav-item">Calendar</div>
        <div className="nav-item">People</div>
        <div className="nav-item">Yammer</div>
        <div className="nav-item">OneDrive</div>
        <div className="nav-item">Sites</div>
        <div className="nav-item">Tasks</div>
      </div>
      
      <div className="user-icon">
        <img src="https://res.cloudinary.com/dpfnim7rk/image/upload/v1730786102/images_sbqgvn.png" alt="User" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnq0ACDcLz7uctW-MQIqHIYPmW_daaMJkvb7idiXsc8v0YGEQeWEi&usqp=CAE&s" alt="User" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluIQji5mRlOXwgKWXkovRRbXqLZjOmkwP3yaMLFUuSeoH0YO87bgZ&usqp=CAE&s" alt="User" />
      </div>
    </div>
  );
};

export default Navbar;