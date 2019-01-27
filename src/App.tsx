import React, { Component } from 'react';
import styled from 'styled-components';
import Login from './containers/Login';
import MainContainer from './containers/MainContainer';
import AuthService, { LOGIN_STATUS } from './services/AuthService';

const Root = styled.div`
  @media only screen and (min-width: 768px) {
    width: 1000px;
    margin: 0 auto;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    height: 100vh;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
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
  }

  componentDidMount = async () => {
    const loginStatus = await AuthService.getInstance().checkLoginStatus();
    this.setState({
      loginStatus
    });
  }

  render () {
    const { loginStatus } = this.state;
    return (
      <Root>
        { loginStatus === LOGIN_STATUS.CHECKING_STATUS && <div>Loading..</div>}
        { loginStatus === LOGIN_STATUS.LOGGED_OUT && <Login onLogin={this.forceUpdate}/> }
        { loginStatus === LOGIN_STATUS.LOGGED_IN && <MainContainer>in</MainContainer> }
      </Root>
    );
  }
}

export default App;
