import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API.tsx';
import CandidateCard from '../components/CandidateCard.tsx';
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const loadNextCandidate = async () => {
    try {
      const candidates = await searchGithub();
      console.log("Fetched Candidates:", candidates); // ✅ Debugging
  
      if (candidates.length > 0) {
        const selectedCandidate = candidates[Math.floor(Math.random() * candidates.length)];
  
        // Ensure we map API response to `Candidate` interface structure
        const formattedCandidate: Candidate = {
          login: selectedCandidate.login,
          name: selectedCandidate.name || "No Name Available",
          avatar_url: selectedCandidate.avatar_url,
          location: selectedCandidate.location || "N/A",
          email: selectedCandidate.email || "N/A",
          company: selectedCandidate.company || "N/A",
          bio: selectedCandidate.bio || "N/A",
        };
  
        setCandidate(formattedCandidate);
      } else {
        setCandidate(null);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setCandidate(null);
    }
  };

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem("candidates") || "[]");
  
      // Avoid duplicates
      if (!savedCandidates.some((c: any) => c.login === candidate.login)) {
        savedCandidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(savedCandidates));
      }
  
      console.log("Saved Candidates:", savedCandidates);
    }
    loadNextCandidate();
  };

  // `useEffect` here to call `loadNextCandidate` when the component loads
  useEffect(() => {
    loadNextCandidate();
  }, []);

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>
  
      {candidate ? ( 
        <CandidateCard
          candidate={candidate} 
          onAccept={saveCandidate}
          onReject={loadNextCandidate}
        />
      ) : (
        <p>Loading candidate...</p> 
      )}
    </div>
  );
};

export default CandidateSearch;