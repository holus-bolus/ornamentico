// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
//
// const EditPost = () => {
//   const { postId } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState({ title: '', content: '', imageUrl: '' });
//
//   useEffect(() => {
//     // Fetch the post data from the API
//     fetch(`/api/posts/${postId}`)
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error('Error:', error));
//   }, [postId]);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`/api/posts/${postId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify(post),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error updating post');
//         }
//         navigate('/');
//       })
//       .catch((error) => console.error('Error:', error));
//   };
//
//   const handleChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };
//
//   return (
//     <form onSubmit={handleSubmit} className="mt-3">
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">
//           Title
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="title"
//           name="title"
//           value={post.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="content" className="form-label">
//           Content
//         </label>
//         <textarea
//           className="form-control"
//           id="content"
//           name="content"
//           value={post.content}
//           onChange={handleChange}
//           rows="3"
//           placeholder="Enter content"
//         ></textarea>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="imageUrl" className="form-label">
//           Image URL
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="imageUrl"
//           name="imageUrl"
//           value={post.imageUrl}
//           onChange={handleChange}
//           placeholder="Enter image URL"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Update Post
//       </button>
//     </form>
//   );
// };
// export default EditPost;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.error('Error:', error));
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error updating post');
        }
        navigate('/');
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleContentChange = (event, editor) => {
    const data = editor.getData();
    setPost({ ...post, content: data });
  };

  const handleImageUrlChange = (e) => {
    setPost({ ...post, imageUrl: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            value={post.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={post.content}
            onChange={handleContentChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            value={post.imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
