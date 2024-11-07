import { useInputValidation } from '../../hooks/useInputValidation';
import { validatePassword } from '../../utils/validation';
import CustomInput from '../common/CustomInput';

interface IPasswordInput {
  onChange: (newValue: string, isValid: boolean) => void;
}

const PasswordInput = ({ onChange }: IPasswordInput) => {
  const { value, isValid, handleChange } = useInputValidation(validatePassword);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    handleChange(newValue);
    onChange(newValue, isValid);
  };

  return (
    <>
      <CustomInput
        type='password'
        label='비밀번호'
        value={value}
        onChange={handlePasswordChange}
      />
      {!isValid && (
        <span style={{ color: 'red' }}>비밀번호는 8자 이상이어야 합니다.</span>
      )}
    </>
  );
};

export default PasswordInput;
