"use client";

import { unionBy } from "lodash";
import { Ddl } from "@api";
import { Product, ProductDetail, Size } from "@customTypes";
import { useCallback, useEffect, useState } from "react";
import SingleSelectionOptions from "./SingleSelectionOptions";
import ProductQuantity from "./ProductQuantity";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@app/GlobalRedux/store";
import { CartDetail } from "@customTypes/cartDetail";
import { addProductToCart } from "@app/GlobalRedux/features/counter/cartSlice";

interface Prop {
  product: Product;
  data: ProductDetail[];
}

interface SelectionProp {
  id: number;
  name: string;
  qty?: number;
}

const ProductSizeColor = ({ product, data }: Prop) => {
  const dispatch = useDispatch();

  const [sizes, setSizes] = useState<SelectionProp[]>([]);
  const [cartColors, setCartColors] = useState<SelectionProp[]>([]);

  const [cartSize, setCartSize] = useState<Ddl | null>(null);
  const [cartColor, setCartColor] = useState<Ddl | null>(null);
  const [cartQty, setCartQty] = useState(1);

  const [maxQty, setMaxQty] = useState<number>(0);

  const checkProduct = (prod: CartDetail) => {
    // Get data already in cart
    const { cart } = store.getState();
    const uniqueId = prod.id + "/" + prod.cartSize + "/" + prod.cartColor;

    //TODO: fix that
    // const prodInCart: CartDetail = cart.data[uniqueId];

    // if (prodInCart) {
    //   //check if product is on demand and already added in cart
    //   if (!prod.in_stock) {
    //     Toast.show({
    //       type: "info",
    //       text1: "Product already added to cart",
    //     });
    //     return;
    //   }

    //   // check if product is in stock that i didnt exceed the max quantity
    //   if (prodInCart.cartQuantity + prod.cartQuantity > maxQty) {
    //     Toast.show({
    //       type: "info",
    //       text1: "You have exceeded the maximum amount in stock",
    //     });
    //     return;
    //   }
    // }

    dispatch(addProductToCart(prod));
  };

  const addColors = useCallback(
    (size: number) => {
      return data
        .filter((elem) => elem.fk_productdetail_size.id === size)
        .map((elem) => {
          return {
            ...elem.fk_productdetail_color,
          };
        });
    },
    [data]
  );

  useEffect(() => {
    if (data?.length > 0) {
      const sizesResp = data.map((elem) => elem.fk_productdetail_size);
      const sizeDistinct = unionBy(sizesResp, "id");

      setSizes(sizeDistinct);
      const color = addColors(sizeDistinct[0].id);

      setCartColors(color);

      setCartSize(sizeDistinct[0]);
      setCartColor(color[0]);
    }
  }, [data, addColors, setCartColor, setCartSize]);

  return (
    <div>
      <SingleSelectionOptions
        data={sizes}
        value={cartSize?.id || 0}
        onSelectOption={(item) => {
          const colorsData = addColors(item.id);
          setCartSize(item);
          setCartColors(colorsData);
          setCartColor(colorsData[0]);
        }}
        canUnselect={false} //TODO: fix that
        title={"Size"}
      />

      <SingleSelectionOptions
        data={cartColors}
        value={cartColor?.id || 0}
        onSelectOption={(item) => {
          setCartColor(item);
        }}
        canUnselect={false} //TODO: fix that
        title={"Color"}
      />

      <ProductQuantity
        cartSize={cartSize}
        cartColor={cartColor}
        maxQty={maxQty}
        onQtyChange={(quantity) => {
          setCartQty(quantity);
        }}
      />

      <button
        className=" bg-primary p-2 justify-end font-MontserratLight text-xl text-white mt-5 w-full"
        onClick={() => {
          const prod: CartDetail = {
            ...product,
            cartQuantity: cartQty,
            cartColor: cartColor?.id,
            cartSize: cartSize?.id,
            cartSizeName: cartSize?.name,
            cartColorName: cartColor?.name,
            totalPrice: cartQty * product.price_amount,
          };

          checkProduct(prod);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductSizeColor;
