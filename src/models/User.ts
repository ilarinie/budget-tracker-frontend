import { Query } from 'react-apollo';

interface UserData {
  user: User;
}

interface User {
  id: string;
  username: string;
  purchases: Purchase[];
  categories: PurchaseCategory[];
}

interface Purchase {
  id: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  description: string;
  categories: PurchaseCategory[];
}

interface PurchaseCategory{
  id: string;
  name: string;
}

export class UserQuery extends Query<UserData, {}> {}