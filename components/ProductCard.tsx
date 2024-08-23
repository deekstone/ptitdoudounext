"use client";

import React from "react";

import Image from "next/image";
import { Product } from "@customTypes";
import { Config } from "@config";
import { useRouter } from "next/navigation";

interface IProductCardProp {
    data: Product;
}

function ProductCard({ data }: IProductCardProp) {
    const router = useRouter();
    return (
        <div
            className="w-[150px]  sm:w-[200px] cursor-pointer"
            onClick={() => {
                router.push(`/product-detail/${data?.slug}`);
            }}>
            <div className="h-[200px] sm:h-[250px] w-full overflow-hidden rounded-2xl relative">
                <Image
                    src={`${Config.IMAGE_URL}${data?.product_images?.[0]?.image}`}
                    layout="fill"
                    objectFit="cover"
                    alt={data?.description}
                />
            </div>
            <div className="flex flex-col">
                <div className=" h-13 overflow-hidden">
                    <span className="py-1 font-MontserratLight text-purple line-clamp-2">
                        {data?.name}
                    </span>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row flex-1 gap-1">
                        <span className=" font-MontserratLight text-purple">
                            {data?.nb_of_views}
                        </span>
                        <img
                            src={"/viewIcon.svg"}
                            width={20}
                            height={10}
                            alt="View product icon"
                            style={{ color: "purple" }}
                        />
                    </div>
                    <span className="self-end font-RobotoBold text-purple">
                        {`USD `}
                        {/* TODO: to change  */}
                        {parseFloat(data?.price_amount).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
