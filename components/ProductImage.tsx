"use client";

import { Config } from "@config";
import { Product } from "@customTypes";
import React, { useState } from "react";
import CustomImage from "./CustomImage";

const ProductImage = ({
    productDetail,
    slug,
}: {
    productDetail?: Product;
    slug: string;
}) => {
    const [imageSelected, setImageSelected] = useState(0);

    const SmallImgPart = () => (
        <div className={`  flex flex-row  gap-5 cursor-pointer width-[50px]`}>
            {productDetail?.product_images.map((item, idx) => (
                <div
                    onClick={() => {
                        setImageSelected(idx);
                    }}
                    key={"image-section" + idx}
                    className={`w-[70px] h-[70px] overflow-hidden relative ${
                        idx === imageSelected ? " border-4 border-primary" : ""
                    }`}>
                    <CustomImage
                        url={`${Config.IMAGE_URL}${item?.image}`}
                        alt={slug}
                        width={70}
                        height={70}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className=" grow  flex flex-col  gap-5">
            <div className=" grow  relative max-h-[700px] min-h-[400px] overflow-hidden ">
                <CustomImage
                    url={`${Config.IMAGE_URL}${productDetail?.product_images?.[imageSelected]?.image}`}
                    alt={productDetail?.description || ""}
                />
            </div>
            {<SmallImgPart />}
        </div>
    );
};

export default ProductImage;
