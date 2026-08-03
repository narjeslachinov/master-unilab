import { StaticImageData } from "next/image";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
}

export interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface WishlistItemProps {
  item: WishlistItem;
  onRemove: (id: number) => void;
}