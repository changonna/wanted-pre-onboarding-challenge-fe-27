import { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <div>
      <button>Logout</button>
    </div>
  ) : (
    <div>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Main;
