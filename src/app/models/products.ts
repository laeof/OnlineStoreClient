import { ICategory } from "./category"

export interface IProduct {
    name: string
    description: string
    price: number
    amount: number
    id: string
    created: string
    isNew: boolean
    isDeleted: boolean
    categoryId: string
    images: {
        fileName: string
    }[]
}