import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import "./vendorlogin.css"
import { Link } from "react-router-dom"

import img1 from "../../Assets/bg party.jpg";
import Swal from "sweetalert2";
import logoimg from "../../Assets/File-01.svg"




const VendorLogin = () => {
  const [data , updatelogin] = useState({contact:"" , password:""})
    const [msg , updatemsg] = useState()
    const naviagte = useNavigate()
    
    const handlelogin = async () =>{
      const formdata = new FormData()
      formdata.append("contact", data.contact)
      formdata.append("password", data.password)
      const response = await fetch("https://event-proposal-project.onrender.com/loginvendor", {
        method: 'POST',
        body: formdata
      })
  
      const resp = await response.json()
      if(resp.status === "failure"){
        naviagte("/loginvendor")
        {Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vendor not found',
       
          })}
      }else if(resp.status === "failure2"){
          updatemsg(<div className="msg2">Invalid Password</div>)
      }else{

        
          naviagte("/events")
          Swal.fire({
            title: 'Vendor logged in successfully',
            icon: 'success',
            showClass: {
               popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
               popup: 'animate_animated animate_fadeOutUp'
            }
         })
      }
  
  
  }
  const handle = () =>{
    naviagte("/registervendor")
}


const handleSymbol =()=>{
naviagte("/loginvendor")
}
  return (
    <div className="form2">
        <img src={img1} alt='party' className='party'/>
      <img src={logoimg} alt='symbol' onClick={handleSymbol} className='symbol'/> 
    <div id="vendor-formContainer">
      <Link to="/loginvendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/loginuser"><button className='user-btn'>User</button> </Link>

       
        <div className='signup-text'>Sign-in Your Account </div>
        <div className='input-boxes'>
    <input type="number" className='phone-input' placeholder='Enter Your contact...' value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  ></input>
   
    <input type="password" className='password-input' placeholder='Enter Your password...' value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} ></input> 
    </div> 
    <p className='forgot-text'>Forgot Password.?</p>
    <div className="link-buttons">      
    <Link to="/registeruser" className='create-user' onClick={handle} >Create Account</Link>
    <span ><button  onClick={handlelogin}  className="sign-in">Login</button></span>
    <div className='msg'>{msg}
    </div>
    
    </div>
    </div>
    </div>
  
  )
}

export default VendorLogin;