import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from './../../services/auth/authService';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authService = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    const token = authService.getToken();

    setIsLoggedIn(!!token);
  }, []);

  const onLogoutClick = () => {
    authService.removeToken();
    setIsLoggedIn(false);
    navigate('/');
  };

  return isLoggedIn ? (
    <div>
      <button onClick={onLogoutClick}>로그아웃</button>
    </div>
  ) : (
    <div>
      {/* <Link to='/auth/signup'>
        <button>Sign Up</button>
      </Link>
      <Link to='/auth/login'>
        <button>Login</button>
      </Link> */}
    </div>
  );
};

export default Main;
