"use client";

import React from "react";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import { FeaturedCategories } from "@api";
import { Config } from "@config";
import { useRouter } from "next/navigation";

interface IFeaturedCategoriesProps {
    data: FeaturedCategories[];
}

function FeaturedCategories({ data }: IFeaturedCategoriesProps) {
    const route = useRouter();

    return (
        <Carousel className="h-[300px]  sm:h-[600px] w-full  overflow-hidden">
            {data.map((item, index) => (
                <div
                    key={"featured-cat" + item.id}
                    onClick={() => {
                        route.push(`/search?categoryName=${item.slug}`);
                    }}>
                    <div
                        className=" z-10  absolute bottom-0 sm:p-11 p-8 text-white
                     font-LobsterRegular sm:text-5xl text-lg drop-shadow-xl">
                        {item.name}
                    </div>
                    <img
                        key={`featured-category-${index}`}
                        src={`${Config.IMAGE_URL}${item.image}`}
                        alt={item.name}
                        className="h-[300px] sm:h-[600px]  w-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default FeaturedCategories;
