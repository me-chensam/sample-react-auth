import React from 'react'
import secureLocalStorage from 'react-secure-storage';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './contexts/auth';

export default function Protected({ children }) {
  const auth = useAuth()
  const location = useLocation();
  const token = secureLocalStorage.getItem('token')

  console.log(auth, token);

  if (!auth.user && !token) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children;
}