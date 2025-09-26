export interface productProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CustomHeaderProps {
  title: string;
  showBackPress?: boolean;
  onBackPress?: () => void;
  showCart?: boolean;
}

export interface ProductCardProps {
  data: {
    title: string;
    id: number;
    image: string;
    category: string;
    price: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export interface CartItem {
  id: number;
  qty: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

export interface CartState {
  cartList: CartItem[];
  cartTotalAmount: number;
}

export interface ResetFilterActionButtonProps {
    onPressAction: () => void;
    min: number;
    max: number;
}

