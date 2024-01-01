import React, { useState, useEffect } from 'react';

import Modal from '../Modal/Modal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';

const Blog = ({ isLoggedIn, onLoginStatusChange, onNavigateToCreatePost }) => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleLogin = (username, password) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => {
        onLoginStatusChange(true);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Login/Sign up</button>
      {isLoggedIn && (
        <button onClick={onNavigateToCreatePost}>Create a post</button>
      )}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <div>No posts yet</div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LoginForm onLogin={handleLogin} />
      </Modal>
    </div>
  );
};

export default Blog;
