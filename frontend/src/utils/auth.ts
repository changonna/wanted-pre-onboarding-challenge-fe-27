import { redirect } from 'react-router-dom';
import { AuthService } from '../services/auth/authService';

/**
 * 사용자 권한 체크하여 인증 상태 확인하는 함수
 * @returns {boolean | Response} 로그인 여부에 따라 true 또는 리다이렉트 응답 반환
 */
export const checkAuth = () => {
  const authService = new AuthService();
  const token = authService.getToken();
  if (!token) {
    return redirect('/auth/login');
  }
  return true;
};
