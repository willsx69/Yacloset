export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}