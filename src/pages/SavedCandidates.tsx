import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface"; 

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
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.name} width="50" />
              {candidate.name} ({candidate.login})
              <button onClick={() => removeCandidate(candidate.login)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;

