import { Query } from 'react-apollo';

export interface UserData {
  user: User;
}

export interface User {
  id: string;
  username: string;
  purchases: Purchase[];
  categories: PurchaseCategory[];
  total: number;
  monthlyPurchases: Purchase[];
  monthlyExpendableIncome: number;
  monthlyTotal: number;
  monthlyRemaining: number;
}

export interface Purchase {
  id: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  description: string;
  categories: PurchaseCategory[];
}

export interface PurchaseCategory {
  id: string;
  name: string;
}

export class UserQuery extends Query<UserData, {}> {}