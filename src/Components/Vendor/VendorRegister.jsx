import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./vendorregister.css"
import img1 from "../../Assets/bg party.jpg";
import { Link } from "react-router-dom"
//import img2 from "../../Assets/File-01.svg";
import Swal from "sweetalert2";
import logoimg from "../../Assets/File-01.svg";


const Register = () => {

    const [data, updatereg] = useState({ username: "" , email: "" , contact :"",password: "" , confirmPassword:""})
    const [msg, updatemsg] = useState()
    const navigate = useNavigate()
    const handlereg = async () => {
      if(data.username.length === 0){
        updatemsg(<div className="new2">Please enter your name</div>)
      }
      else if(data.password.length < 6){
        updatemsg(<div className="new2">Password must be min 6 characters</div>)
      }
      else{
      const formdata = new FormData()
      formdata.append("username", data.username)
      formdata.append("email", data.email)
      formdata.append("contact", data.contact)
      formdata.append("password", data.password);
      formdata.append("confirmpassword", data.confirmPassword)
      const response = await fetch("https://event-proposal-project.onrender.com/registervendor", {
        method: 'POST',
        body: formdata
      })
      const resp = await response.json()
      if (resp.status === "failure") {
        updatemsg(<div className="new2">User already exists</div>)
      }
      else{
        navigate('/loginvendor')
        Swal.fire({
          title: ' Vendor registered successfully',
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
  }
  const handle = () =>{
    navigate("/loginuser")
  }
  const handleSymbol =()=>{
    navigate("/loginvendor")
  }
  
    return (
      <div className='register-container'>
        <img src={img1} alt='party' className='party'/>
      <img src={logoimg} alt='symbol' onClick={handleSymbol} className='symbol'/> 
      <div className="vendor-registerContainer">
      <Link to="/registervendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/registeruser"><button className='user-btn'>User</button> </Link>

      <div className='signup-text'>Register in Your Account </div>
      <div className='input-box' >     <input type="text" placeholder='Name..' className='phone-input' value={data.username} onChange={(e) => { updatereg({ ...data, username: e.target.value }) }} />
        
        <input type="email" placeholder='Email..' className="email-input" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }}/>
        
        
        <input type= "number" placeholder='Contact..'  value={data.contact} onChange={(e)=>{ updatereg({...data, contact: e.target.value})}} className="email-input"/>
  
        <input type="password" placeholder='Password..' className='password-input' value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }}/>
  
        <input type="password" placeholder='Confirm Password..' className='confirm-password-input' value={data.confirmPassword} onChange={(e) => { updatereg({ ...data, confirmPassword: e.target.value }) }}/>
        <Link to="/loginvendor" className='login-user' onClick={handle} >Login </Link>
   
    <span > <button onClick={handlereg} className="vendor-register" >REGISTER </button></span>

        {msg}
         </div>      
    
  
        </div>
      </div>

      
    )
  }

export default Register