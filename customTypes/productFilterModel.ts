export interface ProductFilterModel {
    page?: number;
    category?: number[] | undefined;
    gender?: number | undefined;
    name?: string | undefined;
    size?: number[] | undefined;
    color?: number[] | undefined;
    priceSorting?: number | undefined;
    sortColumnId?: string | undefined;
    sortColumnBy?: "DESC" | "ASC" | undefined;
    categoryName: string | undefined;
    limit?: number;
}
