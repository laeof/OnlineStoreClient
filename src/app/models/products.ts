export interface IProduct {
    name: string
    description: string
    price: number
    amount: number
    id: string
    created: string
    isNew: boolean
    isDeleted: boolean
    images: {
        fileName: string
    }[]
}