import { Color } from "./color.type";
import { ProductDetail } from "./productDetail.type";
import { Size } from "./size.type";

export interface Product {
  prod_id: number;
  id: number;
  name: string;
  category: number;
  shop: number;
  hide?: boolean;
  currency?: number;
  price_list?: number;
  in_stock: number;
  cost_cur: number;
  price_cur: number;
  price_amount: number;
  gender: string;
  images: string;
  category_info: { id: number; name: string };
  sizes: Size[];
  colors: Color[];
  description: string;
  product_images: { image: string }[];
  fk_product_productDetail: ProductDetail[];
  inStock: boolean;
  nb_of_views: number;
  is_favorite: boolean;
  slug: string;
}
