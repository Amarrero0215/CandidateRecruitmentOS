import React from "react";
import { Candidate } from "../interfaces/Candidate.interface"; 

interface CandidateCardProps {
  candidate: Candidate; 
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onAccept, onReject }) => {
  // Destructure candidate object for cleaner code
  const { name, login, avatar_url, location, email, company, bio } = candidate;

  // Correctly format name display
  const displayName = name !== login ? `${name} (${login})` : login; 

  return (
    <div className="candidate-card">
      {/* Avatar */}
      <img src={avatar_url} alt={`${displayName}'s avatar`} className="avatar" />

      {/* Display Name */}
      <h2>{displayName}</h2>

      {/* Candidate Info */}
      <p><strong>Location:</strong> {location || "N/A"}</p>
      <p><strong>Email:</strong> {email ? <a href={`mailto:${email}`}>{email}</a> : "N/A"}</p>
      <p><strong>Company:</strong> {company || "N/A"}</p>
      <p><strong>Bio:</strong> {bio || "N/A"}</p>

      {/* Action Buttons */}
      <div className="buttons">
        <button className="reject" onClick={onReject}>-</button>
        <button className="accept" onClick={onAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateCard;
