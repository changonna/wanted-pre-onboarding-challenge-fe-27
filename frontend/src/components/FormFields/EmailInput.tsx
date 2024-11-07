import { useInputValidation } from '../../hooks/useInputValidation';
import { validateEmail } from '../../utils/validation';
import CustomInput from '../common/CustomInput';

interface IEmailInput {
  onChange: (newValue: string, isValid: boolean) => void;
}

const EmailInput = ({ onChange }: IEmailInput) => {
  const { value, isValid, handleChange } = useInputValidation(validateEmail);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
    onChange(e.target.value, isValid);
  };

  return (
    <>
      <CustomInput
        label='이메일'
        type='email'
        value={value}
        placeholder='example@gmail.com'
        onChange={handleEmailChange}
      />
      {!isValid && (
        <span style={{ color: 'red' }}>유효하지 않은 이메일입니다.</span>
      )}
    </>
  );
};

export default EmailInput;
