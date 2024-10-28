import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token is present, redirect to the login page
    return <Navigate to="/" />;
  }

  // If token exists, render the protected route content
  return children;
};

export default ProtectedRoute;
