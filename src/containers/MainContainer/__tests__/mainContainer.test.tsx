import { ApolloClient, InMemoryCache } from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import MainContainer from '..';
import client from '../../../services/ApolloClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApolloProvider client={client}><MainContainer /></ApolloProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
