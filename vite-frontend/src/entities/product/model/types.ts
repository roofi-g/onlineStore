export interface Product {
    id: string;
    name: string;
    price: number;
    discount: number;
    image: string;
    category_id: number[];
    create_at: string; // ISO string
    sizes: string[];
    isHot: boolean;
}