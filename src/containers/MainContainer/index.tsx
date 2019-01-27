import React from 'react';
import { Query } from 'react-apollo';
import { UserQuery } from '../../models/User';
import { GET_USER } from '../../queries';

class MainContainer extends React.Component {
  render () {
   return (
    <UserQuery query={GET_USER}>
      {({ loading, error, data }) => {
        if (error) return <div>error</div>;
        if (loading || !data) return <div>loading..</div>;

        return <div><pre>{JSON.stringify(data, null, 2)}</pre></div>;
      }}
    </UserQuery>
   );
  }
}

export default MainContainer;