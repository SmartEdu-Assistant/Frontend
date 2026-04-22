import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CircularProgress, Box } from '@mui/material';

interface PrivateRouteProps {
  requiredRole?: 'TEACHER' | 'ADMIN';
}

const PrivateRoute = ({ requiredRole }: PrivateRouteProps) => {
  const { isAuthenticated, user, isLoading, hasRole } = useAuth();

  console.log('PrivateRoute check:', { isAuthenticated, isLoading, user });

  if (isLoading) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
    );
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirect to login');
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    console.log('No role, redirect to home');
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;