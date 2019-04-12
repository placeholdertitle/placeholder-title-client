import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const AuthencicationPage = props => {
  const { type } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAuth = async e => {
    e.preventDefault();
    if (type === 'login') {
      props.login({ email, password });
    } else {
      console.log('ran');
      props.signup({ email, password });
    }
  };
  const renderRedirect = () => {
    if (props.user !== false) {
      return <Redirect to="/" />;
    }
  };
  return (
    <div className="auth">
      {renderRedirect()}
      <div className="auth__background">
        <div className="auth__background-slogan">
          <svg
            className="auth__background-logo"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="rocket"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505.09 19.34A16.08 16.08 0 0 0 492.73 7c-32.61-7-58.13-7-83.56-7C305.44 0 243 55.1 196.27 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h92.6l-10.59 21.42a31.75 31.75 0 0 0 6.15 36.63L166 399.77a32 32 0 0 0 22.61 9.43 31.58 31.58 0 0 0 14-3.29L224 395.33V488a24.08 24.08 0 0 0 24 24 23.66 23.66 0 0 0 10.63-2.53l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V315.71C456.61 268.93 512 206.25 512 103c.08-25.53.08-51-6.91-83.66zM128 256H37l43.59-87.2a16.09 16.09 0 0 1 14.28-8.8h85.18c-13.94 28.07-31.72 64-47.56 96zm223.86 161.18a16 16 0 0 1-8.86 14.28L256 475v-95.52c32-15.83 67.82-33.59 95.86-47.54zM366.5 288.9c-39.5 19.78-135.87 67.45-177.91 88.24l-53.82-53.55C155.64 281.36 203.3 185 223 145.41 273.21 67 330.68 32 409.17 32c21.54 0 42 0 66.63 4.29 4.34 24.87 4.26 45.21 4.18 66.7C480 181.07 445 238.46 366.5 288.9zM368 80a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64zm0 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
            />
          </svg>
          <h1 className="auth__background-text">
            {type === 'login' ? 'Ready for Lift Off?' : 'Got An Account?'}
          </h1>
        </div>
        <button className="auth__background-btn">
          <Link to={type === 'login' ? '/signup' : '/login'} className="auth__background-link">
            {type === 'login' ? 'Sign Up' : 'Log In?'}
          </Link>
        </button>
      </div>
      <div className="auth__container">
        <h1 className="auth__header">{type === 'login' ? 'Log In' : 'Sign Up'}</h1>
        <form action="" className="auth__form">
          <div className="auth__form-group">
            <input
              type="email"
              className="auth__form-input"
              id="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className="auth__form-label">
              Email
            </label>
          </div>
          <div className="auth__form-group">
            <input
              type="password"
              className="auth__form-input"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className="auth__form-label">
              Password
            </label>
          </div>
          <button className="auth__form-btn" type="submit" onClick={handleAuth}>
            {type === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthencicationPage;
