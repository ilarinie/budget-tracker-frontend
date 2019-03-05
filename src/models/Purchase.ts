export class Purchase {
  id: string;
  description: string;
  amount: number;
  created_at: number;
  updated_at: number;
  categories: [{
    name: string
  }];
}