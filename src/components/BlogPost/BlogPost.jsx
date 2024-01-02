import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './BlogPost.css';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  // Sanitize the content to prevent XSS
  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="container blog-post-container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      {post.imageUrl && (
        <img className="post-image" src={post.imageUrl} alt={post.title} />
      )}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </div>
  );
};

export default BlogPost;
