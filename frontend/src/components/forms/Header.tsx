import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <div>
      <button>Logout</button>
    </div>
  ) : (
    <div>
      <Link to='/user/signup'>
        <button>Sign Up</button>
      </Link>
      <Link to='/user/login'>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Header;
