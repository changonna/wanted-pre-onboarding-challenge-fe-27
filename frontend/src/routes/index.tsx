import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login';
import SignUp from '../pages/auth/signup';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import TodoRoute from './TodoRoute';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/user/login' replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'user',
        children: [
          {
            path: 'signup',
            element: <SignUp />,
          },
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
      {
        path: 'todo',
        element: <TodoRoute />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
