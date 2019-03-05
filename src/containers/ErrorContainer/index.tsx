import React from 'react';
import { ApolloError } from 'apollo-boost';


export const ErrorContainer = React.memo(({ error }: {error: ApolloError}) => {
    if (error.networkError) {
        console.log(error.networkError.stack);
    }
 

    return (
        <div>
            muuu
         {error.toString()}
        </div>
    )
})

export default ErrorContainer;