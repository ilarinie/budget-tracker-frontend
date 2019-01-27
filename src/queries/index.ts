import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    user {
      id
      username
      total
      purchases {
        id
        amount
        description
        created_at
        updated_at
        categories {
          name
        }
      }
      categories {
        id
        name
      }
    }
  }
`;