import { Navigate, Outlet } from 'react-router-dom'

// Временная заглушка – в будущем будет замена на реальную проверку
const useAuth = () => {
  const isAuthenticated = localStorage.getItem('access_token') !== null
  const userRole = localStorage.getItem('user_role') as 'TEACHER' | 'ADMIN' | null
  return { isAuthenticated, userRole }
}

interface PrivateRouteProps {
  requiredRole?: 'TEACHER' | 'ADMIN'
}

const PrivateRoute = ({ requiredRole }: PrivateRouteProps) => {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to='/' replace />
  }

  return <Outlet />
}

export default PrivateRoute
