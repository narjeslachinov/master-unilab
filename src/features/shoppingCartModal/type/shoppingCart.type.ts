import { StaticImageData } from "next/image";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData | string;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CartItemProps {
  item: CartItem;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, type: "increase" | "decrease") => void;
}
