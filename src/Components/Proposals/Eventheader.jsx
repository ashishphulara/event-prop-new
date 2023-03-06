import React from 'react'
import {FaFilter} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./eventheader.css"
const Eventheader = () => {
  return (
    <div className='head'>
      <h1 className='pro'> Proposals </h1>
<input type="search" placeholder="Search projects" className='search'/>
<span className='filter'><FaFilter/></span>
<Link to="/createproposals">
<button className='cre'> CREATE </button></Link>


    </div>
  )
}

export default Eventheader;
