import { Link } from "react-router-dom";

import '../css/Errorpage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404: Page Not Found</h1>
      <p>¯\_(ツ)_/¯</p>
      <p>
        <Link to="/">Go back to Candidate Search</Link>
      </p>
    </div>
  );
};

export default ErrorPage;