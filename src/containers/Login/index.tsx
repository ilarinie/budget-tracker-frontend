import React from 'react';
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

interface ILoginState {
  username: string;
  password: string;
  [key: string]: string;
}

interface ILoginProps {
  onLogin: () => void;
}

class Login extends React.Component<ILoginProps, ILoginState> {

  constructor (props: any) {
    super(props);
    this.state = {
      username: 'muu',
      password: 'password123'
    };
  }

  handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      const loggedIn = await AuthService.getInstance().login({ username, password });
      if (loggedIn) {
        this.props.onLogin();
      }
    }
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newState: ILoginState = this.state;
    newState[event.currentTarget.name] = event.currentTarget.value;
    this.setState(newState);
  }

  render () {
    const { username, password } = this.state;
    return (
      <LoginRoot>
        <LoginForm onSubmit={this.handleLogin}>
          <input name='username' value={username} onChange={this.onChange} />
          <input name='password' value={password} onChange={this.onChange} />
          <button />
        </LoginForm>
      </LoginRoot>
    );
  }

}

export default Login;