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
      monthlyTotal
      monthlyPurchases {
        id
        amount
        description
        created_at
        updated_at
        categories {
          name
        }
      }
      monthlyExpendableIncome
      monthlyRemaining
    }
  }
`;

export const ADD_PURCHASE = gql`
  mutation AddPurchase($amount: Float!, $description: String!, $categories: [String]) {
    addPurchase(amount: $amount, description: $description, categories: $categories) {
      id
      amount
      description
      user {
        id
      }
    }
  }
`;