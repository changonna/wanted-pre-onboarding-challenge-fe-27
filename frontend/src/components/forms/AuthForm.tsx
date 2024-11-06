import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFormData, AuthResponse } from '../../types';
import { validateEmail, validatePassword } from '../../utils/validation';
import { AuthService } from '../../services/auth/authService';

interface AuthFormProps {
  title: string;
  onSubmit: (formData: AuthFormData) => Promise<AuthResponse>;
  buttonLabel: string;
  extraButtons?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  buttonLabel,
  extraButtons,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = validateEmail(email) && validatePassword(password);

  const navigate = useNavigate();
  const authService = new AuthService();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Invalid email or password');
      return;
    }

    const formData = { email, password };

    // TODO: action 따로 빼기
    onSubmit(formData)
      .then((response) => {
        authService.setToken(response.token);
        navigate('/');
      })
      .catch((error) => {
        const message = error.response.data.details;
        alert(message);
      });
  };

  // TODO : handleSuccess, handleError 로 분리??

  // const handleError = (error: unknown) => {
  //   console.log(`error: ${error}`);
  //   // TODO: 에러처리 제대로 하기
  //   // if (error instanceof CustomError_Class) {
  //   //   const message =
  //   //     error.response?.data.details || 'An unknown error occurred';
  //   //   alert(message);
  //   // }
  // };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일: </label>
          <input
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='abc@example.com'
          />
        </div>
        <div>
          <label>비밀번호: </label>
          <input
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button disabled={!isFormValid} type='submit'>
          {buttonLabel}
        </button>
      </form>
      {extraButtons}
    </>
  );
};

export default AuthForm;
