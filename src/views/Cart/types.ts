

export interface CartProduct {
    productId: string;
    quantity: number;
  }
export interface UserCartProps {
    id: number;
    userId: number;
    date: string;
    products: CartProduct[];
}