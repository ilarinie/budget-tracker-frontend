import * as React from 'react';
import { Mutation } from 'react-apollo';
import { Purchase } from '../models/Purchase';
import { PurchaseCategory } from '../models/User';
import { ADD_PURCHASE, GET_USER } from '../queries';

export const PurchaseMutation = ({ purchase, categories }: { purchase?: Purchase, categories: PurchaseCategory[] }) => {
  return (
    <Mutation
      mutation={ADD_PURCHASE}
      refetchQueries={[{ query: GET_USER }]}
    >
      {(addPurchase, { data }) => (
        <PurchaseForm addPurchase={addPurchase} categories={categories} />
      )}
    </Mutation>
  );
};

const PurchaseForm = ({ addPurchase, categories }: { addPurchase: (params: any) => void, categories: PurchaseCategory[] }) => {

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = (document.getElementById('desc') as HTMLInputElement).value;
    const category = (document.getElementById('category') as HTMLInputElement).value;
    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
    console.log('cat', category);
    addPurchase({ variables: { description, amount, categories: [category]} });
  };

  return (
    <div>
      <form
        onSubmit={submit}
      >
        <input
          id='desc'
          name='description'
        />
        <input
          id='amount'
          name='amount'
          type='number'
        />
        <select
          id='category'
        >
          {categories.map((cat: { id: string, name: string }) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
        </select>
        <button type='submit'>Add Purchase</button>
      </form>
    </div>
  );
};