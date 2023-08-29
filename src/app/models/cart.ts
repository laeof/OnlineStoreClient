import { IProduct } from "./products";

export interface ICart {
    productId: string,
    userId: string | null,
    cartItems: ICartItem[],
}

export interface ICartItem {
    id: string,
    productId: string,
    productAmount: number,
    productPrice: number,
    product: IProduct | null,
    cartId: string,
}