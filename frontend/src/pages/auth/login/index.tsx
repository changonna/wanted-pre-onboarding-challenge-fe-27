import { useNavigate } from 'react-router-dom';
import AuthForm from '../../../components/forms/AuthForm';
import { loginUser } from '../../../services/auth/authApi';
import { AuthFormData, AuthFormText, AuthFormType } from '../../../types';

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
        type={AuthFormType.Login}
        title={AuthFormText.Login}
        onSubmit={processLogin}
        buttonLabel={AuthFormText.Login}
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
