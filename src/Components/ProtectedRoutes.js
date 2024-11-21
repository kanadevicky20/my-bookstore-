import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const isAuthenticated = localStorage.getItem('isLogin'); // Check if user is logged in

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children (the protected page)
  return children;
}

export default ProtectedRoutes;
