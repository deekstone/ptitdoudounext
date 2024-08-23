import { getHomePage } from "@api";
import { FeaturedCategories, ProductList } from "@components";
import CategoryList from "@components/CategoryList";
import React from "react";

async function Home() {
    const data = await getHomePage();

    return (
        <div>
            <FeaturedCategories data={data.featuredCategories || []} />
            <div className="mx-3 ">
                <div className="flex flex-col m-auto  max-w-[1024px]">
                    <ProductList
                        title="Our Products"
                        data={data?.all_products || []}
                    />
                    <ProductList
                        title="Most Viewed"
                        data={data?.most_viewed || []}
                    />
                    <CategoryList
                        title={"Our Categories"}
                        data={data?.categories}
                        showViewAll={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
