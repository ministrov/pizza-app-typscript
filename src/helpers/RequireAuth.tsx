import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

// This componet will check other componets whether they have jwt

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((state: RootState) => state.user.jwt);

  console.log(jwt);
  
  if (!jwt) {
    return <Navigate to='auth/login' replace/>;
  }
  return children;
};