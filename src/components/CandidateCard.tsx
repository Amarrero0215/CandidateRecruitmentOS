import React from "react";

interface CandidateCardProps {
  avatarUrl: string;
  name: string;
  username: string;
  location: string;
  email: string;
  company: string;
  bio: string;
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  avatarUrl,
  name,
  username,
  location,
  email,
  company,
  bio,
  onAccept,
  onReject,
}) => {
  return (
    <div className="candidate-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name} <span>({username})</span></h2>
      <p>Location: {location}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Company: {company}</p>
      <p>Bio: {bio}</p>
      <div className="buttons">
        <button className="reject" onClick={onReject}>-</button>
        <button className="accept" onClick={onAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateCard;
