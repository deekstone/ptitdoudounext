import { Config } from "@config";
import { Product } from "@customTypes";

export const getProductDetail = async (
    slug: string,
): Promise<Product | undefined> => {
    try {
        const res = await fetch(`${Config.BASE_URL}/mobile/product/${slug}`, {
            cache: "no-store",
        });

        const result = await res.json();

        return result?.data;
    } catch (e) {
        return undefined;
    }
};
