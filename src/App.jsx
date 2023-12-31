import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ApartmentDetail from './components/ApartmentDetail/ApartmentDetail.jsx';
import Blog from './components/Blog/Blog.jsx';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import React from 'react';
import Home from './components/Home/Home.jsx';
import RootLayout from './components/RootLayout/RootLayout.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import { AuthProvider } from './AuthContext.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import { RequireAuth, useAuthContext } from './hooks/useAuth.jsx';
import CreatePost from './components/CreatePost/CreatePost.jsx';
import EditPost from './components/EditPost/EditPost.jsx';
import NotFoundPage from './components/NotFound/NotFound.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" />;
};

const Router = () => {
  const { user } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, path: '', element: <Home /> },
        { path: '/login', element: <LoginForm /> },
        {
          path: '/admin',
          element: (
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          ),
        },
        {
          path: '/create-post',
          element: (
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          ),
        },
        { path: '/aparthotel-villa-manja', element: <ApartmentDetail /> },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/edit-post/:postId',
          element: <EditPost />,
        },
        { path: '/blog-post/:postId', element: <BlogPost /> },
        { path: '/contacts', element: <ContactForm /> },
        { path: '/privacy-policy', element: <PrivacyPolicy /> },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
