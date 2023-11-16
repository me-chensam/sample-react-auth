import React from 'react'
import useAuth from './contexts/auth';
import secureLocalStorage from 'react-secure-storage';
import { Navigate } from 'react-router-dom';

export default function Redirect({ path, children }) {
  const auth = useAuth();

  if (auth.user || secureLocalStorage.getItem('token'))
    return <Navigate to={path ? path : "/sample-react-auth"} />

  return children;
}