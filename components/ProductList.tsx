"use client";

import { Product } from "@customTypes";
import React, { useEffect } from "react";

import Image from "next/image";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
import ScrollContainer from "react-indiana-drag-scroll";

interface IProductList {
    data: Product[];
    title: string;
}

function ProductList({ data, title }: IProductList) {
    const router = useRouter();
 
    return (
        <div>
            <div className="flex flex-row justify-center">
                <h1 className="py-5 flex-1 font-LobsterRegular text-primary text-3xl">
                    {title}
                </h1>
                <h1
                    className="py-5 self-end font-MontserratLight title-style cursor-pointer  "
                    onClick={() => {
                        router.push(`/search/`);
                    }}>
                    View All
                </h1>
            </div>
            <ScrollContainer className="w-full   flex flex-row gap-5 sm:gap-5  overflow-x-scroll no-scrollbar">
                {data.map((item, index) => {
                    return (
                        <div key={`product-list-${index}`}>
                            <ProductCard data={item} />
                        </div>
                    );
                })}
            </ScrollContainer>
        </div>
    );
}

export default ProductList;
