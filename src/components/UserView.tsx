import * as React from 'react';
import { User } from '../models/User';
import { PurchaseMutation } from './PurchaseMutation';

export const UserView = ({ user }: { user: User}) => {
  return (
    <>
      <PurchaseMutation categories={user.categories} />
      <div>
        {JSON.stringify(user.purchases, null, 2)}
      </div>
    </>
  );
};
