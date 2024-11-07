export interface AuthResponse {
  message: string;
  token: string;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export enum AuthFormType {
  Signup = 'signup',
  Login = 'login',
}

export enum AuthFormText {
  Signup = '회원가입',
  Login = '로그인',
}
