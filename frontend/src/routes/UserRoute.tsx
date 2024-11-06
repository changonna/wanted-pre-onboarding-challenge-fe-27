import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/login';
import SignUp from '../pages/auth/signup';

const UserRoute = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default UserRoute;
