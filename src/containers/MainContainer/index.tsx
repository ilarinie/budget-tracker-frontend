import React from 'react';
import { Query } from 'react-apollo';
import { UserView } from '../../components/UserView';
import { UserQuery } from '../../models/User';
import { GET_USER } from '../../queries';

const MainContainer = (props: any) => {
   return (
    <UserQuery query={GET_USER}>
      {({ loading, error, data }) => {
        if (error) return <div>error</div>;
        if (loading || !data) return <div>loading..</div>;
        return <UserView user={data.user} />;
      }}
    </UserQuery>
   );
};

export default MainContainer;