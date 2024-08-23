"use client";

import { RootState } from "@app/GlobalRedux/store";
import { Config } from "@config";
import { CartDetail } from "@customTypes/cartDetail";

 
import { whatsappLink } from "@utils/constants";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const { data, totalAmount, deliveryCharge, subtotal } = useSelector(
    (state: RootState) => state.cart
  );
  const productCart: CartDetail[] = Object.keys(data).map((elem) => data[elem]);

  return (
    <div className="m-auto max-website-width px-2 sm:px-5 py-5">
      <h1 className=" font-MontserratLight text-4xl">Your Cart</h1>
      <div className="flex flex-row pb-5 pt-5 border-b-2 border-blue-gray-50">
        <div className="flex flex-1 text-gray">PRODUCT</div>
        <div className=" text-gray">TOTAL</div>
      </div>
      <div className=" border-b-2 border-blue-gray-50">
        {productCart.map((elem, index) => (
          <div key={`cart-product-${index}`} className="flex flex-row py-5  ">
            <div className="relative w-[130px] h-[130px]  max-w-[130px] mr-5 ">
              <Image
                src={`${Config.IMAGE_URL}${elem?.product_images?.[0].image}`}
                layout="fill" // required
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className=" font-MontserratMedium">{elem.name}</p>
              <p className=" font-MontserratLight">$ {elem.price_amount}</p>
              <p className=" font-MontserratLight">
                Color: {elem.cartColorName}
              </p>
              <p className=" font-MontserratLight">Size: {elem.cartSizeName}</p>
            </div>
            <p className="  px-5 sm:px-20 font-MontserratMedium">
              {elem.cartQuantity}
            </p>
            <p className=" font-MontserratLight">$ {elem.totalPrice}</p>
          </div>
        ))}
      </div>
      <div className="justify-end pt-5 flex flex-row gap-5">
        <p className=" font-MontserratMedium ">Delivery</p>
        <p className=" font-MontserratLight min-w-[80px] text-right ">
          {deliveryCharge} USD
        </p>
      </div>
      <div className="justify-end  flex flex-row gap-5">
        <p className=" font-MontserratMedium">Subtotal</p>
        <p className=" font-MontserratLight min-w-[80px]  text-right">
          {subtotal} USD
        </p>
      </div>
      <div className="justify-end pb-16 mt-5  flex flex-row gap-5 text-2xl">
        <p className=" font-MonserratBold">Total</p>
        <p className=" font-MonserratBold">{totalAmount} USD</p>
      </div>

      <div className="border-solid text-end">
        <button
          className=" self-end w-full sm:w-[400px] py-4 font-MontserratMedium text-white bg-primary"
          onClick={() => {
            let url = whatsappLink;
            let cartList = ``;

            productCart.map((elem) => {
              cartList += `${elem.id} ${elem.cartQuantity} $${parseFloat(
                elem.price_amount + ""
              ).toFixed(2)} \n`;
            });

            cartList += ` Total Amount: $${totalAmount}`;

            // Appending the message to the URL by encoding it
            url += `&text=${cartList}&app_absent=0`;

            // Open our newly created URL in a new tab to send the message
            window.open(url);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cart;
