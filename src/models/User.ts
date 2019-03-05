import { Query } from 'react-apollo';
import { Purchase } from './Purchase';

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
  monthlyIncome: number;
  monthlyTotal: number;
  monthlyRemaining: number;
}

export interface PurchaseCategory {
  id: string;
  name: string;
}

export class UserQuery extends Query<UserData, {}> {}