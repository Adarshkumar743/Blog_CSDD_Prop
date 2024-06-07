import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Post.css';

const Post = ({ title, date, author, image, content }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post-meta">
        <span>{date}</span> | <span>{author}</span>
      </div>
      <img src={image} alt={title} className="post-image" />
      <p>{content}</p>
      <div className="post-actions">
        <button onClick={handleLike} className="like-button">
          Like ({likes})
        </button>
      </div>
      <hr />
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
