import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    // Fetch the post data from the API
    fetch(`/api/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error));
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(post),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error updating post');
        }
        navigate('/');
      })
      .catch(error => console.error('Error:', error));
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <input
        name="imageUrl"
        value={post.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
