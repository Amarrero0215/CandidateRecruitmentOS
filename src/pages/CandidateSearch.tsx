import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API.tsx';
import CandidateCard from '../components/CandidateCard.tsx';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<any>(null);

  const loadNextCandidate = async () => {
    try {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        setCandidate(candidates[Math.floor(Math.random() * candidates.length)]);
      }
    } catch (error) {
      console.error("Error fetching candidate:", error);
    }
  };

  useEffect(() => {
    loadNextCandidate();
  }, []);

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem("candidates") || "[]");
      localStorage.setItem("candidates", JSON.stringify([...savedCandidates, candidate]));
      loadNextCandidate();
    }
  };

  if (!candidate) {
    return <p>Loading candidate...</p>;
  }

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>
      <CandidateCard
        avatarUrl={candidate.avatar_url}
        name={candidate.login}
        username={candidate.login}
        location={candidate.location || "N/A"}
        email={candidate.email || "N/A"}
        company={candidate.company || "N/A"}
        bio={candidate.bio || "N/A"}
        onAccept={saveCandidate}
        onReject={loadNextCandidate}
      />
    </div>
  );
};

export default CandidateSearch;
