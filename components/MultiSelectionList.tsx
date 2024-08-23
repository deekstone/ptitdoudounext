"use client";

import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

interface Item {
    id: number;
    name: string;
}

interface Props {
    data: Item[];
    value: number[];
    itemPressed(item: number[]): void;
    titleLabel: string;
    isLoading?: boolean;
}

const MultiSelectionList = ({
    data,
    value,
    itemPressed,
    titleLabel,
    isLoading,
}: Props) => {
    type Arrayish = { [n: number]: number };
    const objSel: Arrayish = {};
    value?.map(id => {
        objSel[id] = id;
    });

    const renderItem = (item: Item) => {
        const selectedStyle = objSel[item.id]
            ? "border-primary"
            : "border-blue-gray-50";

        return (
            <div
                className={`border ${selectedStyle} border-2 flex-grow text-center cursor-pointer`}
                onClick={() => {
                    if (objSel[item.id]) {
                        delete objSel[item.id];

                        itemPressed(Object.values(objSel));
                    } else {
                        objSel[item.id] = item.id;

                        itemPressed(Object.values(objSel));
                    }
                }}>
                <h1 className={`text-center p-1  font-MontserratMedium px-6`}>
                    {item.name}
                </h1>
            </div>
        );
    };

    return (
        <div style={{ marginTop: 10 }}>
            <h1 className=" text-s font-MontserratLight mt-4 mb-2">
                {titleLabel}
            </h1>
            <RotatingLines
                strokeColor="gray"
                strokeWidth="2"
                animationDuration="0.75"
                width="30"
                visible={isLoading}
            />
            <div className="flex flex-wrap gap-3">
                {data?.map(elem => renderItem(elem))}
            </div>
        </div>
    );
};

export default MultiSelectionList;
