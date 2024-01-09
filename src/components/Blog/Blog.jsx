import React, { useState, useEffect, useContext } from 'react';
import './Blog.css';
import Modal from '../Modal/Modal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import { AuthContext } from '../../AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import CreatePost from '../CreatePost/CreatePost.jsx';

const Blog = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    // Check if the key combination 'Ctrl+Shift+L' is pressed
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyL') {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleDelete = (postId) => {
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting post');
        }
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch((error) => console.error('Error:', error));
  };
  const handleEdit = (post) => {
    navigate(`/edit-post/${post.id}`);
  };

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
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="blog-container container">
      {user && (
        <>
          <button className="blog-button" onClick={onNavigateToCreatePost}>
            Create a post
          </button>
          <button className="blog-button" onClick={handleLogoutClick}>
            Logout
          </button>
        </>
      )}
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post-card" key={post.id}>
              <Link to={`/blog-post/${post.id}`}>
                <h2 className="post-title">{post.title}</h2>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
              </Link>
              {user && (
                <div>
                  <button onClick={() => handleEdit(post)}>Edit</button>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-posts">No posts yet</div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LoginForm
          onLogin={handleLogin}
          onSignUp={handleSignUp}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default Blog;
