import { createUser } from '../../../services/auth/authApi';
import AuthForm from '../../../components/forms/AuthForm';
import { AuthFormData } from '../../../types';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // const handleSuccess = (data: AuthResponse) => {};

  const navigate = useNavigate();

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
  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <>
      <AuthForm
        title='회원가입'
        onSubmit={precessSignup}
        buttonLabel='가입하기'
        extraButtons={<button onClick={handleCancelClick}>가입취소</button>}
      />
    </>
  );
};

export default SignUp;
