import { axiosInstance } from "@axios";
import { Product } from "@customTypes";
import { ProductFilterModel } from "@customTypes/productFilterModel";

export const fetchProduct = (
    page: number,
    productFilters: ProductFilterModel | null,
): Promise<{
    data: { rows: Product[]; count: number };
}> => {
    let filterParams: ProductFilterModel = {
        page: page,
        limit: 24,
        categoryName: productFilters?.categoryName,
        name: productFilters?.name,
        color: productFilters?.color,
        size: productFilters?.size,
        category: productFilters?.category,
        gender:
            productFilters?.gender && productFilters.gender > 0
                ? productFilters?.gender
                : undefined,
    };

    if (productFilters?.priceSorting != null) {
        filterParams = {
            ...filterParams,
            sortColumnId: "price_amount",
            sortColumnBy: productFilters?.priceSorting === 1 ? "DESC" : "ASC",
        };
    }

    return axiosInstance.get("/mobile/product", {
        params: filterParams,
    });
};
