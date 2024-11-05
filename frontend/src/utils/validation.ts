export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 비밀번호 유효성 검사 조건:
 * - 최소 8자 이상
 * @param password
 * @returns
 */
export function validatePassword(password: string): boolean {
  const passwordRegex = /^.{8,}$/;

  return passwordRegex.test(password);
}
