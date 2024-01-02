import { useState } from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const CreatePost = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image.');
    }

    const data = await response.json();
    return data.imageUrl;
  };


  const handleSubmit = async (event) => {
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

    let imageUrl = '';
    if (coverImage) {
      try {
        imageUrl = await handleImageUpload(coverImage);
      } catch (error) {
        console.error('Image upload failed:', error);
        // Handle image upload error, e.g., set an error message in state
        return;
      }
    }

    // Create the post payload with the title, content, and imageUrl
    const postPayload = {
      title,
      content,
      imageUrl, // Include the image URL in the post payload
    };

    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token in the request
      },
      body: JSON.stringify(postPayload), // Use the postPayload for the body data
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
        setTitle('');
        setContent('');
        setCoverImage(null); // Clear the cover image state
        onClose();
        onSave(data);
      })
      .catch((error) => {
        console.error('Error creating post:', error);
        // Optionally set an error state and display an error message
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You would handle image upload here, possibly using a function to upload
      // the image to your server and then setting the cover image URL
      // For now, we'll just keep the file object
      setCoverImage(file);
    }
  };
  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image:</label>
          <input type="file" id="coverImage" onChange={handleImageChange} />
        </div>
        <div className="form-actions">
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
