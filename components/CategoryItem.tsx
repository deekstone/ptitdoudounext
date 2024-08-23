"use client";

import React from "react";

import Image from "next/image";
import { HomePageCategory } from "@api";
import { Config } from "@config";
import { useRouter } from "next/navigation";

interface ICategoryItem {
    data: HomePageCategory;
    slug: string;
}

function CategoryItem({ data, slug }: ICategoryItem) {
    const router = useRouter();

    return (
        <div
            className="rounded-2xl   overflow-hidden w-[150px]  sm:w-[200px]   cursor-pointer"
            onClick={() => {
                router.push(`/search?categoryName=${slug}`);
            }}>
            <div className=" w-[150px]  sm:w-[200px] h-[200px] overflow-hidden  relative ">
                <Image
                    src={`${Config.IMAGE_URL}${data?.data[0]?.fk_categoryproduct_product?.product_images?.[0]?.image}`}
                    layout="fill" // required
                    objectFit="cover"
                    alt="" // TODO: add alt prop
                />
            </div>
            <div className="items-center justify-center bg-primary ">
                <span className=" w-full self-center">
                    <p className="text-white text-center w-full py-1 font-LobsterRegular text-xl">
                        {data.name}
                    </p>
                </span>
            </div>
        </div>
    );
}

export default CategoryItem;
