import { getProductDetail } from "@api/productDetail.api";
import { Config } from "@config";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";
import ProductSizeColor from "@components/productSizeColor";
import { ProductImage } from "@components";

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params: { slug },
}: Params): Promise<Metadata> {
    const productDetail = await getProductDetail(slug);

    return {
        title: productDetail?.name,
        openGraph: {
            images: [
                {
                    url: `${Config.IMAGE_URL}${productDetail?.product_images?.[0]?.image}`,
                    width: 100,
                    height: 100,
                },
            ],
        },
    };
}

async function ProductDetail({ params: { slug } }: Params) {
    const productDetail = await getProductDetail(slug);

    return (
        <div className="  m-auto max-website-width  p-5 ">
            <div className="flex flex-col md:flex-row  gap-5 ">
                <ProductImage slug={slug} productDetail={productDetail} />
                <div className="  w-[100%] sm:w-[500px]  flex-col sm:px-5 pt-5 bg-white overflow-hidden">
                    <div className="flex flex-col  sm:w-[400px] gap-3 flex-grow">
                        <h1 className="leading-10 text-3xl font-MontserratMedium">
                            {productDetail?.name}
                        </h1>
                        <p className="font-MontserratMedium">
                            USD{" "}
                            {parseFloat(
                                productDetail?.price_amount + "",
                            ).toFixed(2)}
                        </p>
                        <p
                            className=" font-MontserratLight"
                            dangerouslySetInnerHTML={{
                                __html: productDetail?.description,
                            }}></p>
                        <ProductSizeColor
                            data={productDetail?.fk_product_productDetail}
                            product={productDetail}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
