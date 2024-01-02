import React, { useState, useEffect, useContext } from 'react';
import './Blog.css';
import Modal from '../Modal/Modal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import { AuthContext } from '../../AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import CreatePost from '../CreatePost/CreatePost.jsx';

const Blog = () => {
  const { isLoggedIn, onLoginStatusChange } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const handleCreatePostClose = () => {
    setShowCreatePost(false);
    setFetchTrigger(fetchTrigger + 1);
  };

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
  }, [fetchTrigger]);

  const navigate = useNavigate();
  const onNavigateToCreatePost = () => {
    setShowCreatePost(true);
  };

  const handleSavePost = (postData) => {
    setShowCreatePost(false);
  };

  if (showCreatePost) {
    return (
      <CreatePost onSave={handleSavePost} onClose={handleCreatePostClose} />
    );
  }

  const handleSignUp = (username, password) => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.text();
      })
      .then(() => {
        onLoginStatusChange(true);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  };

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
        localStorage.setItem('token', data.accessToken);
        onLoginStatusChange(true);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  const handleLogout = () => {
    onLoginStatusChange(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="blog-container container">
      {!isLoggedIn && (
        <button className="blog-button" onClick={() => setIsModalOpen(true)}>
          Login/Sign up
        </button>
      )}
      {isLoggedIn && (
        <>
          <button className="blog-button" onClick={onNavigateToCreatePost}>
            Create a post
          </button>
          <button className="blog-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              to={`/blog-post/${post.id}`}
              className="post-card"
              key={post.id}
            >
              <h2 className="post-title">{post.title}</h2>
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            </Link>
          ))
        ) : (
          <div className="no-posts">No posts yet</div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LoginForm onLogin={handleLogin} onSignUp={handleSignUp} />
      </Modal>
    </div>
  );
};

export default Blog;
