import { loginUser } from '../../../services/auth/authApi';
import AuthForm from '../../../components/forms/AuthForm';
import { AuthFormData } from '../../../types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const processLogin = async (formData: AuthFormData) => {
    try {
      const response = await loginUser(formData);

      return response;
    } catch (error) {
      console.log(`error: ${error}`);
      throw error;
    }
  };

  const handleSignupClick = () => {
    navigate('/auth/signup');
  };

  // const handleLoginClick = (formData: AuthFormData): Promise<void> => {
  //   return processLogin(formData);
  // };

  return (
    <>
      <AuthForm
        title='로그인'
        onSubmit={processLogin}
        buttonLabel='로그인'
        extraButtons={
          <button type='button' onClick={handleSignupClick}>
            회원가입
          </button>
        }
      />
    </>
  );
};

export default Login;
