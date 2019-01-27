import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';
import Login from './containers/Login';
import MainContainer from './containers/MainContainer';
import client from './services/ApolloClient';
import AuthService, { LOGIN_STATUS } from './services/AuthService';

const Root = styled.div`
  @media only screen and (min-width: 768px) {
    width: 1000px;
    margin: 0 auto;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
  min-height: 100vh;
  padding: 2em;
`;

interface IAppState {
  loginStatus: LOGIN_STATUS;
}

class App extends Component<{}, IAppState> {

  constructor (props: any) {
    super(props);
    this.state = {
      loginStatus: LOGIN_STATUS.CHECKING_STATUS
    };
    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount = async () => {
    const loginStatus = await AuthService.getInstance().checkLoginStatus();
    this.setState({
      loginStatus
    });
  }

  onLogin () {
    this.setState({
      loginStatus: LOGIN_STATUS.LOGGED_IN
    });
  }

  render () {
    const { loginStatus } = this.state;
    return (
      <ApolloProvider client={client}>
        <Root>
          { loginStatus === LOGIN_STATUS.CHECKING_STATUS && <div>Loading..</div>}
          { loginStatus === LOGIN_STATUS.LOGGED_OUT && <Login onLogin={this.onLogin}/> }
          { loginStatus === LOGIN_STATUS.LOGGED_IN && <MainContainer>in</MainContainer> }
        </Root>
      </ApolloProvider>
    );
  }
}

export default App;
