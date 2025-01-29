import React from "react";
import { Candidate } from "../interfaces/Candidate.interface"; 

interface CandidateCardProps {
  candidate: Candidate; 
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onAccept, onReject }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} className="avatar" />
      <h2>{candidate.name} <span>({candidate.login})</span></h2>
      <p>Location: {candidate.location || "N/A"}</p>
      <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email || "N/A"}</a></p>
      <p>Company: {candidate.company || "N/A"}</p>
      <p>Bio: {candidate.bio || "N/A"}</p>
      <div className="buttons">
        <button className="reject" onClick={onReject}>-</button>
        <button className="accept" onClick={onAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateCard;
