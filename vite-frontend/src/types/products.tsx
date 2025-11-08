export interface Products {
    id: number;
    name: string;
    price: number;
    discount: number;
    // image: string;
    category_id: number | string | (number | string)[];
    // create_at: d;
    // sizes: ar;
    isHot: boolean
}
