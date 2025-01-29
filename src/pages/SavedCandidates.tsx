import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

import '../css/Candidate.css';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates: Candidate[] = JSON.parse(localStorage.getItem("candidates") || "[]");
    setSavedCandidates(candidates);
    console.log("Loaded Saved Candidates:", candidates);
  }, []);

  const removeCandidate = (username: string) => {
    const updatedCandidates = savedCandidates.filter((c) => c.login !== username);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h1>Saved Candidates</h1>

      {/*  Scrollable Dashboard Container */}
      <div className="saved-candidates-dashboard">
        <table className="saved-candidates-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Location</th>
              <th>Company</th>
              <th>Accept</th> {/*  Future Feature */}
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.length === 0 ? (
              <tr>
                <td colSpan={8} className="empty-row">
                  No candidates saved yet.
                </td>
              </tr>
            ) : (
              savedCandidates.map((candidate) => (
                <tr key={candidate.login}>
                  <td>
                    <img
                      src={candidate.avatar_url}
                      alt={candidate.name}
                      className="candidate-avatar"
                    />
                  </td>
                  <td>{candidate.name}</td>
                  <td>@{candidate.login}</td>
                  <td>
                    {candidate.email !== "N/A" ? (
                      <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{candidate.location}</td>
                  <td>{candidate.company}</td>
                  
                  {/*  Placeholder Accept Button (Future Email Integration) */}
                  <td>
                    <button className="accept-button" onClick={() => alert(`Accepted ${candidate.name}!`)}>
                      ✅
                    </button>
                  </td>

                  {/* ✅ Remove Candidate Button */}
                  <td>
                    <button className="remove-button" onClick={() => removeCandidate(candidate.login)}>
                      ❌
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedCandidates;
