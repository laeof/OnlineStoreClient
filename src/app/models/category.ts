import { IProduct } from "./products";

export interface ICategory {
    id: string,
    name: string,
    imgPath: string,
    products: IProduct[]
}