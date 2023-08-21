import { ICreateProduct, IMonitor, IProduct } from "../models/products";

export interface ICreateProductFactory {
    createProduct(): ICreateProduct;
}

export class MonitorFactory implements ICreateProductFactory {
    constructor() {

    }

    createProduct(): IMonitor {
        const commonData: IMonitor = {
            name: '123',
            description: 'descr00',
            price: 3000,
            amount: 55,
            categoryId: "sd",
            images: [
                { fileName: '123' },
                { fileName: '222' },
            ],
            diagonal: null,
            brightness: null,
            maxtrixType: null,
            ratio: null,
            reaction: null,
            frequency: null,
            interfaces: null,
            contrast: null
        }

        return commonData;
    }
}