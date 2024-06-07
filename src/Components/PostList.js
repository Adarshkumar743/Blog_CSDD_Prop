import React from 'react';
import Post from './Post';
import '../styles/PostList.css';
import post2Imgae from  '../assets/post1.jpg';
import post1Imgae from  '../assets/post2.jpg';

const posts = [
  {
    title: 'First Blog Post',
    date: 'May 31, 2024',
    author: 'John Doe',
    image: post1Imgae,
    content: 'This is the content of the first blog post. It includes some interesting insights and valuable information.'
  },
  {
    title: 'Second Blog Post',
    date: 'June 1, 2024',
    author: 'Jane Smith',
    image: post2Imgae,
    content: 'This is the content of the second blog post. It includes further details and engaging storytelling.'
  }
];

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;
