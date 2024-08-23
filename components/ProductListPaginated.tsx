"use client";

// import { fetchProduct } from "@app/search/[[...query]]/page.service";
import { Product } from "@customTypes";
import { ProductFilterModel } from "@customTypes/productFilterModel";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { searchParams } from "@app/search/[[...query]]/page";
import { debounce } from "lodash";

interface IProductListPaginated {
    data: Product[];
    page?: number;
    limit: number;
    searchParams: searchParams;
}

const ProductListPaginated = ({
    data,
    limit,
    searchParams,
}: IProductListPaginated) => {
    const router = useRouter();
    const sp = { ...searchParams };
    let page = Number(sp.page) || 1;

    const decreasePage = debounce(() => {
        if (page <= 1) return;
        page = page - 1;

        router.push(`/search?${new URLSearchParams({ ...sp, page })}`);
    }, 200);

    const increasePage = debounce(() => {
        if (limit * page >= data?.count) return;
        page = page + 1;

        router.push(`/search?${new URLSearchParams({ ...sp, page })}`);
    }, 200);

    // const [loading, setLoading] = useState(false);
    // const [res, setRes] = useState<Product[]>([]);
    // const [totalProducts, setTotalProducts] = useState(0);

    // const getProducts = useCallback(
    //     async (p_filter: ProductFilterModel) => {
    //         setLoading(true);

    //         const product = await fetchProduct(1, { ...p_filter, name: query });
    //         setTotalProducts(product.data.count);
    //         setRes(product.data.rows);

    //         setLoading(false);
    //     },
    //     [query],
    // );

    // const loadMoreProducts = async (page = 1) => {
    //     setLoading(true);

    //     const product = await fetchProduct(page, {
    //         ...filter,
    //         name: query,
    //     });
    //     setTotalProducts(product.data.count);
    //     setRes([...res, ...product.data.rows]);

    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getProducts(filter);
    // }, [query]);

    return (
        <div>
            <div className="pt-5 m-auto max-website-width ">
                <div className="flex flex-row gap-5  ">
                    <div className="w-full">
                        {/* <div className="flex flex-row  mb-5  mx-5 ">
                            <h1 className=" font-MontserratLight flex-1">
                                  Total Product {totalProducts}  
                            </h1>
                            <div
                                className=" cursor-pointer"
                                onClick={() => {
                                    // setIsFiltereVisible(true);
                                }}>
                                <Image
                                    src={"/filter.svg"}
                                    width={30}
                                    height={30}
                                    alt="search product"
                                />
                            </div>
                        </div> */}
                        <div className=" flex items-center justify-center ">
                            {/* <RotatingLines
                                strokeColor="gray"
                                strokeWidth="2"
                                animationDuration="0.75"
                                width="30"
                                visible={loading && pageActive === 1}
                            /> */}
                        </div>

                        {data?.rows?.length > 0 ? (
                            <div className="flex flex-wrap gap-5 items-center justify-center">
                                {data?.rows.map((item, index) => (
                                    <ProductCard
                                        key={`search-product-${index}`}
                                        data={item}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex  align-middle  justify-center w-full pt-6">
                                <div className="flex flex-col text-center">
                                    <Image
                                        src={"/notification.svg"}
                                        width={300}
                                        height={300}
                                        alt="No search result"
                                    />
                                    <div className=" font-MonserratBold text-purple text-3xl mt-10">
                                        No search results
                                    </div>
                                </div>
                            </div>
                        )}

                        <div>
                            <div className="flex items-center justify-center my-10">
                                {/* <RotatingLines
                                    strokeColor="gray"
                                    strokeWidth="2"
                                    animationDuration="0.75"
                                    width="30"
                                    visible={loading && pageActive > 1}
                                /> */}

                                <div className=" flex gap-5">
                                    <button
                                        className={`  ${
                                            page <= 1
                                                ? " bg-blue-gray-200"
                                                : "bg-primary"
                                        }    py-2 px-5 rounded-3xl text-white font-MonserratBold `}
                                        onClick={decreasePage}>
                                        Prev
                                    </button>
                                    <button //TODO: add debounce
                                        className={` ${
                                            limit * page >= data?.count
                                                ? " bg-blue-gray-200"
                                                : "bg-primary"
                                        }  py-2 px-5 rounded-3xl text-white font-MonserratBold `}
                                        onClick={increasePage}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPaginated;
