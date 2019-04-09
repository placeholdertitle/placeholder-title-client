import React, { useState, useEffect } from 'react';
import getUser from '../controllers/userService';

const NavBar = () => {
  const [user, setUser] = useState(false);
  let exampleUser = getUser();

  const renderAuthStatus = () => {
    if (!user) {
      return (
        <button className="navbar__button">
          <a href="/" className="navbar__link" onClick={login}>Log In</a>
        </button>
      )
    } else {
      return (
        <li className="navbar__dropdown">
          <button className="navbar__dropdown-button">{`Hi ${user.name.first}`}</button>
          <div className="navbar__dropdown-content">
            <a href="/" className="navbar__dropdown-link" onClick={logout}>Log Out</a>
            <a href="/" className="navbar__dropdown-link">Account</a>
          </div>
        </li>
      )
    }
  }

  const login = async (e) => {
    e.preventDefault();
    const data = await getUser();
    setUser(data);
  }

  const logout = (e) => {
    e.preventDefault();
    setUser(false)
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <svg className="navbar__logo-img svg-inline--fa fa-rocket fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505.09 19.34A16.08 16.08 0 0 0 492.73 7c-32.61-7-58.13-7-83.56-7C305.44 0 243 55.1 196.27 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h92.6l-10.59 21.42a31.75 31.75 0 0 0 6.15 36.63L166 399.77a32 32 0 0 0 22.61 9.43 31.58 31.58 0 0 0 14-3.29L224 395.33V488a24.08 24.08 0 0 0 24 24 23.66 23.66 0 0 0 10.63-2.53l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V315.71C456.61 268.93 512 206.25 512 103c.08-25.53.08-51-6.91-83.66zM128 256H37l43.59-87.2a16.09 16.09 0 0 1 14.28-8.8h85.18c-13.94 28.07-31.72 64-47.56 96zm223.86 161.18a16 16 0 0 1-8.86 14.28L256 475v-95.52c32-15.83 67.82-33.59 95.86-47.54zM366.5 288.9c-39.5 19.78-135.87 67.45-177.91 88.24l-53.82-53.55C155.64 281.36 203.3 185 223 145.41 273.21 67 330.68 32 409.17 32c21.54 0 42 0 66.63 4.29 4.34 24.87 4.26 45.21 4.18 66.7C480 181.07 445 238.46 366.5 288.9zM368 80a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64zm0 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
        </svg>
        <h1 className="navbar__logo-text">placeholder-title</h1>
      </div>
      <ul className="navbar__menu">
        <button className="navbar__button">
          <a href="/" className="navbar__link">Home</a>
        </button>
        <button className="navbar__button">
          <a href="/" className="navbar__link">About</a>
        </button>
        {renderAuthStatus()}
      </ul>
    </div>
  );
}

export default NavBar;