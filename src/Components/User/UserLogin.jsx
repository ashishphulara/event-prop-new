import logoimg from "../../Assets/File-01.svg";
import React from 'react'
import img1 from "../../Assets/bg party.jpg";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import "./userlogin.css"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

//import Userheader from "./header/Userheader";
import UserContext from "../UserContext";

const Login = () =>{
    const [data , updatelogin] = useState({contact:"" , password:""});
    //const [userdata, getuserdata] = useState([])
    const [msg , updatemsg] = useState()
    const { setUsername } = useContext(UserContext)
    const naviagte = useNavigate()

    const handlelogin = async () =>{
        const formdata = new FormData()
        formdata.append("contact", data.contact)
        formdata.append("password", data.password)

        //formdata.append("username", data.username)
        //console.log(formdata)
        const response = await fetch("https://event-proposal-project.onrender.com/loginuser", {
          method: 'POST',
          body: formdata
        })
   

       // console.log(response)
        const resp = await response.json()
        console.log(resp)
        //let username =resp.user.username
        //console.log(username)
        //setUsername(resp.user.username)
        if(resp.status === "failure"){
            naviagte("/loginuser")
            {Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not found',
              
              })}

        }else if(resp.status === "failure2"){
            updatemsg(<div className="msg2">Invalid Password</div>)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Password',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }else{
          
            // console.log(username)
            // setUsername(username)
            
            
            //     getuserdata(resp.user.username)
            //   console.log(resp)
            //   console.log(resp.user)
            //   console.log(userdata.user.username)
            const { username } = resp.user;
            console.log(username); // Output: 
         setUsername(resp.user.username)
            naviagte("/")
           
            Swal.fire({
                title: 'User logged in successfully',
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
    naviagte("/registeruser")
}

const handleSymbol =()=>{
 naviagte("/loginvendor")
}

return(
   
    <div className="form2">
   <img src={img1} alt='party' className='party'/>
   <img src={logoimg} alt='symbol' onClick={handleSymbol} className='symbol' /> 
    <div id="user-formContainer">
   <Link to="/loginvendor" ><button className='vendor-btn'>Vendor</button></Link>
 <Link to="/loginuser"><button className='user-btn'>User</button> </Link>
<div className='signup-text'>Sign in Your Account </div>
<div className='input-boxes'>

    <input type="number" className='phone-input' placeholder='Enter Your contact...' value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  />
  
    <input type="password" className='password-input'placeholder='Enter Your password...' value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} /> 
    </div>

   <p className='forgot-text'>Forgot Password.?</p>
   <div className="link-buttons">      
    <Link to="/registeruser" className='create-user' onClick={handle} >Create Account</Link>
   <span ><button  onClick={handlelogin}  id="login-btn">Login</button></span>
   <div className="msg"> {msg}
   </div>
   
   
    </div>
   </div>
    </div>
)
}

export default Login
