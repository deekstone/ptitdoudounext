import { Ddl } from "@api";
import React, { useEffect, useState } from "react";

interface Props {
  productQty?: number;
  onQtyChange(quantity: number): void;
  maxQty: number;
  cartSize: Ddl | null;
  cartColor: Ddl | null;
}

function ProductQuantity({ onQtyChange, productQty, maxQty, cartSize }: Props) {
  const [quantity, setQuantity] = useState(productQty ? productQty : 1);

  //reset the quantity when user changes the size
  useEffect(() => {
    if (cartSize) {
      setQuantity(1);
      onQtyChange(1);
    }
    // eslint-disable-next-line
  }, [cartSize]);

  const onDecreasePress = () => {
    if (quantity <= 1) return;
    const qty = quantity - 1;
    setQuantity(qty);
    onQtyChange(qty);
  };

  const onIncreasePress = () => {
    const qty = quantity + 1;
    if (qty > maxQty) return;
    setQuantity(qty);
    onQtyChange(qty);
  };

  return (
    <div className=" flex flex-col ">
      <h1 className=" text-s font-MontserratLight mt-4 mb-2">Quantity</h1>
      <div className="  flex flex-row">
        <div className="border-blue-gray-50 border-solid border-2 flex items-center justify-center">
          <div
            className="w-12 h-12  flex items-center cursor-pointer "
            onClick={onDecreasePress}
          >
            <p className=" cursor-pointer w-full text-center  font-MontserratThin text-3xl">
              -
            </p>
          </div>
          <div className="w-12 h-12  flex items-center cursor-pointer">
            <p className=" cursor-pointer  w-full text-center font-MontserratMedium text-l">
              {quantity}
            </p>
          </div>
          <div
            className="w-12 h-12  flex items-center cursor-pointer"
            onClick={onIncreasePress}
          >
            <p className=" cursor-pointer  w-full text-center font-MontserratThin text-2xl">
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantity;
