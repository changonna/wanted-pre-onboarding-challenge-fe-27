import { useState } from 'react';
import CustomInput from '../common/CustomInput';
import { validateEmail } from '../../utils/validation';

interface IEmailInput {
  inputValue: string;
  onChange: (newValue: string) => void;
}

const EmailInput = ({ inputValue, onChange }: IEmailInput) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setIsValid(validateEmail(newValue));
    onChange(newValue);
  };
  return (
    <>
      <CustomInput
        label='이메일'
        type='email'
        value={inputValue}
        placeholder='example@gmail.com'
        onChange={handleChange}
      />
      {!isValid && (
        <span style={{ color: 'red' }}>유효하지 않은 이메일입니다.</span>
      )}
    </>
  );
};

export default EmailInput;
