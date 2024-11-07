import { useState } from 'react';
import { validatePassword } from '../../utils/validation';
import CustomInput from '../common/CustomInput';

interface IPasswordInput {
  inputValue: string;
  onChange: (newValue: string) => void;
}

const PasswordInput = ({ inputValue, onChange }: IPasswordInput) => {
  const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setIsValid(validatePassword(newValue));
    onChange(newValue);
  };

  return (
    <>
      <CustomInput
        type='password'
        label='비밀번호'
        value={inputValue}
        onChange={handlePasswordChange}
      />
      {!isValid && (
        <span style={{ color: 'red' }}>비밀번호는 8자 이상이어야 합니다.</span>
      )}
    </>
  );
};

export default PasswordInput;
