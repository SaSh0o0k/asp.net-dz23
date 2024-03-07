export interface IProductItem {
    id?: number | undefined;
    name: string,
    price: string,
    description: string,
    quantity: number,
    images: string[],
<<<<<<< HEAD
    categoryName: string,
=======
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
    categoryId: number,
}

export interface IProductData {
    list: IProductItem[],
    pageIndex: number,
    pageSize: number,
    totalCount: number,
<<<<<<< HEAD
    // totalPages: number
=======
    totalPages: number
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
}

export interface IProductSearch{
    name?: string,
<<<<<<< HEAD
=======
    minPrice?: number,
    maxPrice?: number,
    quantity?: number,
    minQuantity?: number,
    maxQuantity?: number,
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
    description?: string,
    page: number,
    pageSize: number,
    categoryId?: number,
}