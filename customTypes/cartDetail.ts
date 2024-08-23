import { Product } from "./product.type";

export interface CartDetail extends Product {
  cartQuantity: number;
  cartColor?: number;
  cartColorName?: string;
  cartSize?: number;
  cartSizeName?: string;
  totalPrice: number;
}