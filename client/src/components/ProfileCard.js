import React from 'react';
import { Link } from 'react-router-dom';
import pictures from '../assets/sample-images.json';

const ProfileCard = ({ user }) => {
  const renderImages = () => {
    if (pictures && pictures.length > 0) {
      return (
        <div className="profile__image-grid">
          {pictures.map(image => {
            return (
              <img
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                className="profile__image-instance"
              />
            );
          })}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
  if (user.name) {
    return (
      <div className="profile__card">
        <div className="profile__avatar" />
        <img src={user.picture.large} alt="" className="profile__avatar-img" />
        <h1 className="profile__display-name">
          {user.name.first} {user.name.last}{' '}
        </h1>
        <h4 className="profile__bio">
          Coffee loving code monkey{' '}
          <span role="img" aria-label="monkey">
            🐒
          </span>
        </h4>
        <div className="profile__info">
          <ul className="profile__info-list">
            <li className="profile__info-point profile__info-point--location">
              <span className="profile__info-description">
                Lives in{' '}
                <span className="profile__location">
                  {user.location.city}, {user.location.state}
                </span>
              </span>
            </li>
            <li className="profile__info-point profile__info-point--occupation">
              <span className="profile__info-description">
                Works at <span className="profile__location">Tech Startup</span>
              </span>
            </li>
            <li className="profile__info-point profile__info-point--university">
              <span className="profile__info-description">
                Went to <span className="profile__location">Wentworth Institute of Technology</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="profile__image-collection">
          <h4 className="profile__image-collection-header">Photos</h4>
          {renderImages()}
          <div className="profile__image-collection-row">
            <Link
              className="profile__image-collection-link"
              to={`/profile/${user.id.value}/photos`}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default ProfileCard;
