import {
    MultiSelectionList,
    ProductCard,
    ProductListPaginated,
} from "@components";
import React from "react";
import SingleSelectionOptions from "@components/SingleSelectionOptions";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@axios";
import { ProductFilterModel } from "@customTypes/productFilterModel";
import Image from "next/image";
import { Product } from "@customTypes";
import { Config } from "@config";
import { useParams } from "next/navigation";

// const getSize = async () => {
//     const resp = await axiosInstance.get("/size");
//     return resp;
// };

// const getColor = async () => {
//     const resp = await axiosInstance.get("/color");
//     return resp;
// };

// const getCategory = async () => {
//     const resp = await axiosInstance.get("/category");
//     return resp;
// };

export const getProduct = async (
    page = 1,
    query = "",
    categoryName = "",
    limit = 15,
): Promise<Product[]> => {
    try {
        let q = "";
        if (categoryName) q += `&categoryName=${categoryName}`;
        const res = await fetch(
            `${Config.BASE_URL}/mobile/product?page=${page}&limit=${limit}&name=${query}${q}`,
            {
                cache: "no-store",
            },
        );

        const result = await res.json();

        return result?.data;
    } catch (e) {
        return [];
    }
};

export interface searchParams {
    page: number;
    limit: string;
    query: string;
}

async function Search({ params, searchParams }) {
    const page = searchParams?.page || 1;
    const query = searchParams?.query || "";
    const limit = searchParams?.limit || 15;
    const categoryName = searchParams?.categoryName || null;

    const products = await getProduct(page, query, categoryName);

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

    // const productListRef = useRef();
    // const initialFilter = {
    //     category: [],
    //     gender: -1,
    //     size: [],
    //     color: [],
    // };

    // const [filter, setFilter] = useState<ProductFilterModel>(initialFilter);
    // const [isFilterVisible, setIsFiltereVisible] = useState(false);

    // const { data: sizeData, isLoading: isLoadingSize } = useQuery({
    //     queryKey: ["size"],
    //     queryFn: async () => {
    //         const data = await getSize();
    //         return data;
    //     },
    // });

    // const { data: colorData, isLoading: isLoadingColor } = useQuery({
    //     queryKey: ["color"],
    //     queryFn: async () => {
    //         const data = await getColor();
    //         return data;
    //     },
    // });

    // const { data: categoryData, isLoading: isLoadingCategory } = useQuery({
    //     queryKey: ["category"],
    //     queryFn: async () => {
    //         const data = await getCategory();
    //         return data;
    //     },
    // });

    // const gender: { id: number; name: string }[] = [
    //     { id: 1, name: "Boy" },
    //     { id: 2, name: "Girl" },
    //     { id: 3, name: "Unisex" },
    // ];

    return (
        <div>
            {/* {isFilterVisible && (
                <div className=" bg-black bg-opacity-60  w-full h-screen fixed z-50 mt-[-70px] sm:p-10">
                    <div className="flex flex-col z-50 bg-white p-2 max-w-[800px] h-full mx-auto relative">
                        <div className=" overflow-auto no-scrollbar flex-1 overflow-none  ">
                            <div className="flex flex-row justify-center py-2 top-0 bg-white   ">
                                <h1 className=" text-2xl font-MonserratBold flex-1">
                                    Product Filter
                                </h1>
                                <div
                                    className=" cursor-pointer"
                                    onClick={() => {
                                        setIsFiltereVisible(false);
                                    }}>
                                    <Image
                                        src={"/close.svg"}
                                        width={30}
                                        height={30}
                                        alt="search product"
                                    />
                                </div>
                            </div>
                            <div className="mt-5">
                                <MultiSelectionList
                                    isLoading={isLoadingCategory}
                                    data={categoryData?.data?.rows}
                                    titleLabel="Category"
                                    value={filter?.category || []}
                                    itemPressed={items => {
                                        setFilter({
                                            ...filter,
                                            category: items,
                                        });
                                    }}
                                />
                                <SingleSelectionOptions
                                    onSelectOption={item => {
                                        setFilter({
                                            ...filter,
                                            gender: item.id,
                                        });
                                    }}
                                    data={gender}
                                    value={filter.gender || -1}
                                    title="Gender"
                                />
                                <MultiSelectionList
                                    isLoading={isLoadingColor}
                                    data={colorData?.data?.rows}
                                    titleLabel="Color"
                                    value={filter.color || []}
                                    itemPressed={items => {
                                        setFilter({ ...filter, color: items });
                                    }}
                                />
                                <MultiSelectionList
                                    isLoading={isLoadingSize}
                                    data={sizeData?.data?.rows}
                                    titleLabel="Size"
                                    value={filter.size || []}
                                    itemPressed={items => {
                                        setFilter({ ...filter, size: items });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="">
                            <button
                                className="button-border-style"
                                onClick={() => {
                                    setIsFiltereVisible(false);
                                    setFilter(initialFilter);
                                    productListRef?.current?.getProd({});
                                }}>
                                Clear
                            </button>
                            <button
                                className="button-style"
                                onClick={() => {
                                    setIsFiltereVisible(false);
                                    productListRef?.current?.getProd(filter);
                                }}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )} */}

            <ProductListPaginated
                data={products}
                searchParams={searchParams}
                limit={limit}
            />
        </div>
    );
}

export default Search;
