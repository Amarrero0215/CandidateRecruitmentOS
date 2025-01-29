import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Candidate Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/SavedCandidates" className="nav-link">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
