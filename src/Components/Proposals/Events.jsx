import React, { useState, useEffect } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa"
import Header from './VendorHead'

import Eventheader from './Eventheader'
import "./events.css"

const Events = () => {
  const [proposal, setProposal] = useState([]);

  useEffect(() => {
    fetch("https://event-proposal-project.onrender.com/allproposals")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProposal(data.proposals)
      })
      .catch((err) => console.log(err))
  }, [])


  const handleDelete = (index, event) => {
    event.preventDefault();
    const proposalId = proposal[index]._id;
    console.log(proposalId)
    fetch(`https://event-proposal-project.onrender.com/delete/${proposalId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        const updatedProposals = proposal.filter((_, i) => i !== index);
        setProposal(updatedProposals);
      });
  };

  return (
    <div className='ev'>
      <Header />
      <Eventheader />

      <div id='events-container'>
        {proposal.map((proposal, index) => {
          return (
            <div id='container' key={index}>

              <h4 id='ename'>{proposal.eventName}</h4>
              <p id='damn'>{proposal.description}</p>

              <div id='et'>
                <span id='eventtype'>Event Type </span><span className='proty'>Proposal Type</span> 
                <span className='fdate'> From Date</span> <span className='tdate'>To Date</span>
                <span id='bud'>Budget</span> </div>

              <div id='fi-ev'>
                <span >{proposal.eventType}</span>
                <span > {proposal.proposalType}</span>
                <span >{proposal.fromDate}</span>
                <span >{proposal.toDate}</span>
                <span >{proposal.budget}</span>
              </div>

              <div id='icon'>
                <FaTrash id='trash' onClick={(event) => handleDelete(index, event)} />
                <FaEdit onClick={() => {
                 
                }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Events
