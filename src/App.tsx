import React, { Component, useEffect, useState } from 'react';
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
    width: calc(100vw - 4em);
    max-width: calc(100vw - 4em);
  }
  overflow-x: hidden;
  min-height: 100vh;
  padding: 2em;
`;

interface IAppState {
  loginStatus: LOGIN_STATUS;
}

const App = (props: any) =>  {

  const initialStatus: LOGIN_STATUS = LOGIN_STATUS.CHECKING_STATUS;
  const [ loginStatus, setLoginStatus ] = useState(initialStatus as LOGIN_STATUS);
  useEffect(
    () => {
      checkLoginStatus();
    },
    [ loginStatus ]
  );

  const checkLoginStatus = async () => {
    const loginStatus = await  AuthService.getInstance().checkLoginStatus();
    setLoginStatus(loginStatus);
  };

  const onLogin =  () => {
    setLoginStatus(LOGIN_STATUS.LOGGED_IN);
  };

  return (
    <ApolloProvider client={client}>
      <Root>
        { loginStatus === LOGIN_STATUS.CHECKING_STATUS && <div>Loading..</div>}
        { loginStatus === LOGIN_STATUS.LOGGED_OUT && <Login onLogin={onLogin}/> }
        { loginStatus === LOGIN_STATUS.LOGGED_IN && <MainContainer>in</MainContainer> }
      </Root>
    </ApolloProvider>
  );
};

export default App;
