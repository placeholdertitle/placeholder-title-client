import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import PostCard from './PostCard';

class NewsFeed extends Component {
  render() {
    return (
      <div className="newsfeed__container">
        <div className="newsfeed__sidebar">
          <ProfileCard user={this.props.user} />
        </div>
        <div className="newsfeed__feed">
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
          <div className="newsfeed__content">
            <PostCard />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
