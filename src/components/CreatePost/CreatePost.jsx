import { useState } from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    // Check if token is available
    if (!token) {
      console.error('No token found');
      // Handle the case where the token is not available
      return;
    }

    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token in the request
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful post creation
        console.log('Post created:', data);
        setTitle('');
        setContent('');
        onClose();
        onSave(data);
      })
      .catch((error) => {
        console.error('Error creating post:', error);
        // Optionally set an error state and display an error message
      });
  };

  return (
    <div className={'create-post-container'}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Create post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
