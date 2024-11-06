import { createUser } from '../../../api/userApi';
import AuthForm from '../../../components/forms/AuthForm';
import { AuthFormData } from '../../../types';

const SignUp = () => {
  // const handleSuccess = (data: AuthResponse) => {};

  const precessSignup = async (formData: AuthFormData) => {
    try {
      const response = await createUser(formData);
      return response;
    } catch (error) {
      // TODO: 콘솔 지우면 왜 에러나는지 확인
      console.log(`error: ${error}`);
      throw error;
    }
  };

  // const handleSubmitClick = (formData: AuthFormData): Promise<void> => {
  //   return processsignup(formData);
  // };

  return (
    <>
      <AuthForm
        title='회원가입'
        onSubmit={precessSignup}
        buttonLabel='회원가입'
      />
    </>
  );
};

export default SignUp;
