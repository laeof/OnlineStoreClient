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
    images: IImageProduct[]
}

export interface IImageProduct {
    fileName: string
}

export interface IMonitor extends ICreateProduct{
    diagonal: string | null
    brightness: string | null
    maxtrixType: string | null
    ratio: string | null
    reaction: string | null
    frequency: string | null
    interfaces: string | null
    contrast: string | null
}

export interface ICreateProduct {
    name: string | null,
    description: string | null,
    price: number | null,
    amount: number | null,
    categoryId: string | null,
    images: IImageProduct[] | null,
}