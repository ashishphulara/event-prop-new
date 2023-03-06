import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoimg from "../../Assets/File-01.svg"
import img1 from "../../Assets/bg party.jpg";
import "./userregister.css"
import Swal from "sweetalert2";

// vendor has to register 

const Register = () => {
  const [data, updatereg] = useState({ username: "" ,email: "" , contact :"",password: "" , confirmPassword:""})
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
    const response = await fetch("https://event-proposal-project.onrender.com/registeruser", {
      method: 'POST',
      body: formdata
    })
    const res = await response.json()
    if (res.status === "failure") {
      updatemsg(<div className="new2">user already exists</div>)
    }
    else{
      navigate('/loginuser')
      Swal.fire({
        title: 'User registered successfully',
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
// const handle = () =>{
//   navigate("/loginuser")
// }
const handleSymbol =()=>{
  navigate("/loginvendor")
}
  return (

    <div className='register-container'>
    <img src={img1} alt='party' className='party'/>
  <img src={logoimg} alt='symbol' onClick={handleSymbol} className='symbol'/> 
  <div className="user-registerContainer">
  <Link to="/registervendor" ><button className='vendor-btn'>Vendor</button></Link>
  <Link to="/registeruser"><button className='user-btn'>User</button> </Link>

  <div className='signup-text'>Register in Your Account </div>
  <div className='input-box' >     
  <input type="text" placeholder='Name..' className='phone-input' value={data.username} onChange={(e) => { updatereg({ ...data, username: e.target.value }) }} />


    <input type="email" placeholder='Email..' className="email-input" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }}/>
    
    
    <input type= "number" placeholder='Contact..'  value={data.contact} onChange={(e)=>{ updatereg({...data, contact: e.target.value})}} className="email-input"/>

    <input type="password" placeholder='Password..' className='password-input' value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }}/>

    <input type="password" placeholder='Confirm Password..' className='confirm-password-input' value={data.confirmPassword} onChange={(e) => { updatereg({ ...data, confirmPassword: e.target.value }) }}/>
 

<Link to="/loginuser" className='login-user'  >Login </Link>
<span > <button onClick={handlereg} className="register-btn" >REGISTER </button></span>

    {msg}
     </div>      


    </div>
  </div>

    
  )
}

export default Register