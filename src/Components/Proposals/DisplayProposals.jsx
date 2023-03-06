import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userhead from "../User/header/Userhead";
import "./display.css";
import img5 from "../../Assets/mainpage.jpg"

const DisplayProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://event-proposal-project.onrender.com/allproposals")
      .then((res) => res.json())
      .then((data) => {
        setProposals(data.proposals);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProposalClick = (proposal) => {
    setSelectedProposal(proposal);
    navigate("/details", { state: { proposal: proposal } });
  };

  return (
    <div>
      <Userhead />
      <img src={img5} alt="main" id="main"/>
      <div className="allproposals">
        {selectedProposal && (
          <div className="selected">
            <div className="container">
              {selectedProposal.images && (
                <img
                  src={`https://event-proposal-project.onrender.com/images/${selectedProposal.images[0]}`}
                  alt={selectedProposal.eventName}
                />
              )}
              <div id="en">{selectedProposal.eventName}</div>
              <div>{selectedProposal.budget}</div>
              <button
                onClick={() => {
                  setSelectedProposal(null);
                }}
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
        {proposals.map((proposal, index) => {
          return (
            <div
              className="link"
              style={{ textDecoration: "none" }}
              key={index}
              onClick={() => handleProposalClick(proposal)}
            >
              <div className="container">
                {proposal.images && (
                  <img
                    src={`https://event-proposal-project.onrender.com/images/${proposal.images[0]}`}
                    alt={proposal.eventName}
                  />
                )}
                <div id="en">{proposal.eventName}</div>
                <div>{proposal.budget}</div>
                <div>{proposal.eventPlace}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProposals;
