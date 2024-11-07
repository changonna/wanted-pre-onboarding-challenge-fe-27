import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '../../services/auth/authService';
import { AuthFormData, AuthFormType, AuthResponse } from '../../types';
import { EmailInput, PasswordInput } from '../FormFields';
import CustomButton from '../common/CustomButton';

interface AuthFormProps {
  type: AuthFormType;
  title: string;
  onSubmit: (formData: AuthFormData) => Promise<AuthResponse>;
  buttonLabel: string;
  extraButtons?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  title,
  onSubmit,
  buttonLabel,
  extraButtons,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [validStates, setValidStates] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const authService = new AuthService();

  useEffect(() => {
    setIsFormValid(Object.values(validStates).every((isValid) => isValid));
  }, [validStates]);

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

  const checkEmail = () => {
    // email 검증 통과하면 -> 활성화
    // email 체크 api 요청
  };

  const handleFieldChange = (field: string, isValid: boolean) => {
    setValidStates((prev) => ({ ...prev, [field]: isValid }));
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <EmailInput
            onChange={(value, isValid) => {
              setEmail(value);
              handleFieldChange('email', isValid);
            }}
          />
          {type === AuthFormType.Signup && (
            <CustomButton
              btnName='중복확인'
              onClick={checkEmail}
              disabled={true}
            />
          )}
        </div>
        <PasswordInput
          onChange={(value, isValid) => {
            setPassword(value);
            handleFieldChange('password', isValid);
          }}
        />
        <button disabled={!isFormValid} type='submit'>
          {buttonLabel}
        </button>
      </form>
      {extraButtons}
    </>
  );
};

export default AuthForm;
