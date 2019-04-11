import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ code }) => {
  return (
    <div className="error__container">
      <h1 className="error__hero-text">Oops!</h1>
      <h1 className="error__status">Error 404 - Your page could not be found</h1>
      <p className="error__message">
        The page you are looking for either moved or no longer exists
      </p>
      <Link to="/" className="error__home-btn">
        Return to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
