"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const CustomImage = ({ url, alt, ...props }: { url: string; alt: string }) => {
    const [isLoading, setIsLoading] = useState(true);

    const onLoadCallBack = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && (
                <div className=" flex absolute z-10 w-[100%] h-[100%] bg-blue-gray-300  align-middle justify-center">
                    <RotatingLines
                        strokeColor="gray"
                        strokeWidth="2"
                        width="80"
                        visible={true}
                    />
                </div>
            )}
            <img
                src={url}
                className=" object-contain"
                alt={alt}
                onLoadStart={() => setIsLoading(true)}
                onLoad={onLoadCallBack}
                onError={onLoadCallBack}
                {...props}
            />
        </div>
    );
};

export default CustomImage;
