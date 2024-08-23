import { ProductListPaginated } from "@components";
import React from "react";

function CategoryPage({ params: { category } }) {
    return <ProductListPaginated filter={{ categoryName: category }} />;
}

export default CategoryPage;
