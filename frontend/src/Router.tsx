import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Main from './pages/main/index';
import NotFound from './pages/notFound';

const Router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
]);

export default Router;
