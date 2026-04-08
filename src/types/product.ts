export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isTrending?: boolean;
    deliveryLocation: string;
    createdAt: string;
}
