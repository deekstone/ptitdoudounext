"use client";

import React, { useRef, useState } from "react";

import CategoryItem from "./CategoryItem";
import { HomePageCategory } from "@api";
import ScrollContainer from 'react-indiana-drag-scroll'

interface ICategoryListProp {
    title: string;
    data: HomePageCategory[];
    showViewAll?: boolean;
}

function CategoryList({ title, data, showViewAll = true }: ICategoryListProp) {
 
    return (
        <div className="mt-10 ">
            <div className="flex flex-row ">
                <h1 className="py-5 flex-1 font-LobsterRegular text-primary text-3xl">
                    {title}
                </h1>
                {showViewAll && (
                    <h1 className="py-5 self-end font-MontserratLight title-style cursor-pointer">
                        View All
                    </h1>
                )}
            </div>
            <ScrollContainer className="flex flex-row gap-5 overflow-x-scroll ">
                <>
                    {data?.map((item, index) => {
                        return (
                            <div key={`product-list-${index}`}>
                                <CategoryItem data={item} slug={item.slug} />
                            </div>
                        );
                    })}
                </>
            </ScrollContainer>
        </div>
    );
}

export default CategoryList;
