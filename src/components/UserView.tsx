import * as React from 'react';
import { User } from '../models/User';
import { PurchaseMutation } from './PurchaseMutation';
import { PurchaseGrid } from './PurchaseGrid';

export const UserView = ({ user }: { user: User}) => {
  return (
    <>
      <div>
        <pre style={{ whiteSpace: 'pre-wrap'}}>
          User: {user.username} <br />
          Income: {user.monthlyIncome} <br />
          Total: {user.total} <br />
          MonthlyTotal: {user.monthlyTotal} <br />
        
        </pre>
      </div>
      <PurchaseMutation categories={user.categories} />
      <PurchaseGrid purchases={user.purchases} />
    </>
  );
};
