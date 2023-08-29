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
    clickCount: number
    date: Date | null,
    images: IImageProduct[]
}

export interface IImageProduct {
    fileName: string
}

export interface IKeyboard {

}

export interface IMonitor {
    diagonal: string | null
    brightness: string | null
    matrixType: string | null
    ratio: string | null
    reaction: string | null
    frequency: string | null
    interfaces: string | null
    contrast: string | null
}

export interface ICreateProduct {
    name: string,
    description: string | null,
    price: number,
    amount: number | null,
    categoryId: string,
    images: IImageProduct[] | null,
    monitor: IMonitor,
    keyboard: IKeyboard,
}