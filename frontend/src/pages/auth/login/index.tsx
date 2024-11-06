import { loginUser } from '../../../api/userApi';
import AuthForm from '../../../components/forms/AuthForm';
import { AuthFormData } from '../../../types';

const Login = () => {
  const processLogin = async (formData: AuthFormData) => {
    try {
      const response = await loginUser(formData);

      return response;
    } catch (error) {
      console.log(`error: ${error}`);
      throw error;
    }
  };

  // const handleLoginClick = (formData: AuthFormData): Promise<void> => {
  //   return processLogin(formData);
  // };

  return (
    <>
      <AuthForm title='로그인' onSubmit={processLogin} buttonLabel='로그인' />
    </>
  );
};

export default Login;
