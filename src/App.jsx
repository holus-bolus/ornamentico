import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApartmentDetail from './components/ApartmentDetail/ApartmentDetail.jsx';
import OnlineStore from './components/OnlineStore/OnlineStore.jsx';
import InteriorDesign from './components/InteriorDesign/InteriorDesign.jsx';
import Blog from './components/Blog/Blog.jsx';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import React from 'react';
import Home from './components/Home/Home.jsx';
import RootLayout from './components/RootLayout/RootLayout.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, path: '', element: <Home /> },
      { path: '/aparthotel-villa-manja', element: <ApartmentDetail /> },
      { path: '/online-store', element: <OnlineStore /> },
      { path: '/interior-design', element: <InteriorDesign /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog-post:id', element: <BlogPost /> },
      { path: '/contacts', element: <ContactForm /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
