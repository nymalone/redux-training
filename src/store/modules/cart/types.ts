export interface iProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  products: object;
  quantity: number; 
}

export interface ICartState {
  items: ICartItem[];
}
