export class Purchase {
  id: string;
  description: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  categories: {
    name: string
  };
}