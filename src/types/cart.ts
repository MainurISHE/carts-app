export interface CartItem {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  discountTotal: number;
  userId: number;
  items: CartItem[];
  total: number;
}
