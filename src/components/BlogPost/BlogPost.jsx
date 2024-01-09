import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './BlogPost.css';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
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
      .then((data) => {
        setPost(data);
        setComments(data.comments || []);
      })
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ content: newComment }),
      });
      if (response.ok) {
        const addedComment = await response.json();
        setComments([...comments, addedComment]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

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
      <div className="comments-container">
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>{comment.content}</p>
            <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <label>
            Comment:
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            ></textarea>
          </label>
          <button type="submit" className="comment-button">
            Submit a comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
