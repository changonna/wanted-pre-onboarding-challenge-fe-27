import axios from 'axios';
import { AuthResponse, AuthFormData } from '../types';

// TODO: 비밀번호 암호화
export const createUser = async (
  formData: AuthFormData
): Promise<AuthResponse> => {
  try {
    const { email, password } = formData;
    const response = await axios.post('http://localhost:8080/users/create', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const loginUser = async (
  formData: AuthFormData
): Promise<AuthResponse> => {
  try {
    const { email, password } = formData;
    const response = await axios.post('http://localhost:8080/users/login', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
