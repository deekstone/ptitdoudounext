import { Config } from "@config";
import { Product } from "@customTypes";

export interface Ddl {
    id: number;
    name: string;
}

interface Category extends Ddl {
    order: number;
    slug: string;
}

export interface FeaturedCategories {
    id: number;
    name: string;
    image: string;
    feature: boolean;
    slug: string;
}

export type HomePageCategory = Category & {
    data: { fk_categoryproduct_product: Product }[];
    slug: string;
};

type Homepage = {
    all_products?: Product[];
    categories?: HomePageCategory[];
    most_viewed?: Product[];
    featuredCategories?: FeaturedCategories[];
};

type HomepageResponse = {
    data: Homepage;
};

export const getHomePage = async (): Promise<Homepage> => {
    try {
        const res = await fetch(`${Config.BASE_URL}/homepage`, {
            cache: "no-store",
        });
        const result: HomepageResponse = await res.json();

        return result?.data;
    } catch (e) {
        return {};
    }
};
