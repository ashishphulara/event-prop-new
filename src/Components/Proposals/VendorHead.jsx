import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import img6 from "../../Assets/File-01.svg"
import Vendorheader from "../Vendor/header/Venderheader"
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform logout logic here
    // ...
    navigate('/loginvendor', { replace: true }); 
    Swal.fire({
      title: 'Vendor logged out successfully',
      icon: 'success',
      showClass: {
         popup: 'animate_animated animate_fadeInDown'
      },
      hideClass: {
         popup: 'animate_animated animate_fadeOutUp'
      }
   })// navigate to login page without adding to the history stack
  };

  const handelsymbolsub =()=>{
    navigate("/events")
   }

  return (
    <div className='headt'>
      <div className='textt'>
        <span className='logo-header'>
          <img src={img6} alt='symbol' onClick={handelsymbolsub}  className='symbol' style={{width:"6%",marginRight:"-2%", marginTop:"-1%"}}/> 
          </span>
        <div className='name'>
          <Link to='/loginvendor' style={{ textDecoration: 'none' }}>
            <span className='vendort'><Vendorheader/></span>
          </Link>
          <span>
            <img
              className='imgt'
              src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
              alt='head'
            />
          </span>
          <button className='logoutt' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

