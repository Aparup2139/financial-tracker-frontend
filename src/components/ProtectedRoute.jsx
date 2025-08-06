import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // This check is now more robust. It handles null, undefined, and the
  // string "undefined" which can sometimes be stored by mistake.
  if (!token || token === 'undefined' || token === 'null') {
    // If no valid token is found, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If a valid token is found, render the child components (the dashboard)
  return children;
};