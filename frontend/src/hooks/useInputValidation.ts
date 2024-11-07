import { useState } from 'react';
import { StringValidator } from '../types';

/**
 * input 검증 hook
 * @param validateFunc 검증 함수
 * @returns
 */
export const useInputValidation = (validateFunc: StringValidator) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsValid(validateFunc(newValue));
  };

  return { value, isValid, setValue, handleChange };
};
