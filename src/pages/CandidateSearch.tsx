import { useState, useEffect } from "react";
import { searchGithub } from "../api/API.tsx";
import CandidateCard from "../components/CandidateCard.tsx";
import { Candidate } from "../interfaces/Candidate.interface";

import "../css/Candidate.css";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  // Function to load the next candidate from API
  const loadNextCandidate = async () => {
    try {
      const candidates = await searchGithub();
      console.log("Fetched Candidates:", candidates);

      if (candidates.length > 0) {
        const selectedCandidate = candidates[Math.floor(Math.random() * candidates.length)];
        console.log("Selected Candidate:", selectedCandidate);

        if (!selectedCandidate) {
          console.error("No candidate was selected.");
          return;
        }

        // Destructure `selectedCandidate`
        const { name, login, avatar_url, location, email, company, bio } = selectedCandidate;

        // Set display name properly
        const displayName = name && name.trim() !== "" ? name : login;

        // Format candidate object
        const formattedCandidate: Candidate = {
          login: login || "Unknown",
          name: displayName,
          avatar_url: avatar_url || "https://via.placeholder.com/100",
          location: location || "N/A",
          email: email && email.trim() !== "" ? email : "N/A",
          company: company && company.trim() !== "" ? company : "N/A",
          bio: bio && bio.trim() !== "" ? bio : "N/A",
        };

        console.log("Formatted Candidate:", formattedCandidate);
        setCandidate(formattedCandidate);
      } else {
        console.warn("No candidates received from API.");
        setCandidate(null);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setCandidate(null);
    }
  };

  // Function to save the current candidate
  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem("candidates") || "[]");

      // Avoid saving duplicate candidates
      if (!savedCandidates.some((c) => c.login === candidate.login)) {
        savedCandidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(savedCandidates));
      }

      console.log("Saved Candidates:", savedCandidates);
    }
    loadNextCandidate();
  };

  // Load a candidate when the component mounts
  useEffect(() => {
    loadNextCandidate();
  }, []);

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>

      {candidate ? (
        <CandidateCard candidate={candidate} onAccept={saveCandidate} onReject={loadNextCandidate} />
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
