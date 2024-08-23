import { Color } from "./color.type";
import { Size } from "./size.type";

export interface ProductDetail {
  id: number;
  product: number;
  fk_productdetail_size: Size;
  fk_productdetail_color: Color;
  qty: number;
  createdAt: string;
  updatedAt: string;
}
