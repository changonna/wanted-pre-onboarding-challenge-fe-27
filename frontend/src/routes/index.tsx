import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/login';
import SignUp from '../pages/auth/signup';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import { checkAuth } from '../utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: checkAuth,
  },
  {
    path: 'auth',
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
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
