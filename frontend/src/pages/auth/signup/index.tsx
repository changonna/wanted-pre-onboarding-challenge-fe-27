import { useState } from 'react';
import { validateEmail, validatePassword } from '../../../utils/validation';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isFormValid = validateEmail(email) && validatePassword(password);

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. validation 체크
    if (isFormValid) {
      // 2. API 요청
      console.log('회원가입 요청');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmitClick}>
        <div>
          <label>이메일: </label>
          <input
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='abc@example.com'
          />
        </div>
        <div>
          <label>비밀번호: </label>
          <input
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button disabled={!isFormValid} type='submit'>
          회원가입
        </button>
        <Link to='/'>
          <button>취소</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
