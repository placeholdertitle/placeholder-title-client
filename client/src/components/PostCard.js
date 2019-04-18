/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

export default props => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  return (
    <div className="social-card">
      <div className="social-card__avatar">
        <img
          src="https://i1.wp.com/www.templegatesgames.com/wp-content/uploads/2015/08/tg_tod_192x192.png?resize=192%2C192"
          className="social-card__avatar-image"
        />
      </div>
      <div className="social-card__content">
        <div className="social-card__title">
          <h1 className="social-card__name">The Practical Dev</h1>
          <h2 className="social-card__handle-date">@ThePracticalDev - Sep 10</h2>
        </div>
        <div className="social-card__message">
          <p className="social-card__message-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum ut felis ut
            sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nunc nec pharetra enim. Phasellus in dui et risus tincidunt blandit.
          </p>
        </div>
        <div className="social-card__actions">
          <i className="fal fa-comment">
            <span className="stat comments">2</span>
          </i>
          <i
            className={retweeted ? 'fal fa-retweet rt-active' : 'fal fa-retweet'}
            onClick={() => setRetweeted(!retweeted)}
          >
            <span className="stat retweets">47</span>
          </i>
          <i
            className={liked ? 'fas fa-heart like-active' : 'fal fa-heart'}
            onClick={() => setLiked(!liked)}
          >
            <span className="stat likes">190</span>
          </i>
          <i className="fal fa-envelope" />
        </div>
      </div>
      <div className="social-card__comments">
        <ul>
          <li>Test Comment</li>
        </ul>
      </div>
    </div>
  );
};
