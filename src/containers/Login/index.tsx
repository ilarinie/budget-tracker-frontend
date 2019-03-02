import React, { useState } from 'react';
import styled from 'styled-components';
import AuthService from '../../services/AuthService';

const LoginRoot = styled.div`

`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

interface ILoginProps {
  onLogin: () => void;
}

const Login = (props: ILoginProps) => {

  const [ loginInformation, setLoginInformation ] = useState({ username: 'muu', password: 'password123'});

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = loginInformation;
    if (username && password) {
      const loggedIn = await AuthService.getInstance().login({ username, password });
      if (loggedIn) {
        props.onLogin();
      }
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLoginInformation({ ...loginInformation, [event.currentTarget.name]: event.currentTarget.value });
  };

  return (
    <LoginRoot>
      <LoginForm onSubmit={handleLogin}>
        <input name='username' value={loginInformation.username} onChange={onChange} />
        <input name='password' value={loginInformation.password} onChange={onChange} />
        <button />
      </LoginForm>
    </LoginRoot>
  );

};

export default Login;