import React from 'react';
import { Query } from 'react-apollo';
import { UserView } from '../../components/UserView';
import { UserQuery } from '../../models/User';
import { GET_USER } from '../../queries';
import ErrorContainer from '../ErrorContainer';
import { ApolloError } from 'apollo-boost';

const MainContainer = React.memo((props: any) => {
  
  const handleError = (error: ApolloError) => {
    //  localStorage.clear();
    return <ErrorContainer error={error} />
  }

   return (
    <UserQuery query={GET_USER}>
      {({ loading, error, data }) => {
        if (error) return handleError(error);
        if (loading || !data) return <div>loading..</div>;
        return <UserView user={data.user} />;
      }}
    </UserQuery>
   );
});

export default MainContainer;