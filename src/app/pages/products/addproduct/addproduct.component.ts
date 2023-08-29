import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ICategory } from 'src/app/models/category'
import { ICreateProduct, IImageProduct, IProduct } from 'src/app/models/products'
import { CategoryService } from 'src/app/services/category/category.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.scss'],
})

export class AddProductPage {
    categories: ICategory[] = [];
    productData: ICreateProduct = {
        amount: 0,
        name: '',
        description: '',
        price: 0,
        categoryId: '',
        images: null,
        monitor: {
            diagonal: '',
            brightness: null,
            matrixType: '',
            ratio: null,
            reaction: null,
            frequency: null,
            interfaces: null,
            contrast: null
        },
        keyboard: {},
    };
    imageProduct: IImageProduct[] = [];
    fileUploadStates: boolean;

    constructor(
        public categoryService: CategoryService,
        private productsService: ProductsService
    ) {

    }
    ngOnInit(): void {
        this.categoryService.getAll().subscribe(category => {
            this.categories = category
        })
    }
    async addProduct(productData: ICreateProduct) {
        this.files.forEach(element => {
            this.fileUploadStates = true;
        });

        var formData = new FormData()

        for (const dropped of this.files) {
            const fileEntry = dropped.fileEntry as FileSystemFileEntry;
            const file = await this.getFileFromEntry(fileEntry); // Await for the file
            formData.append('file', file, dropped.relativePath);
            this.files.forEach(element => {
                this.fileUploadStates = false;
            });
        }

        this.files.forEach(element => {
            var img: IImageProduct = { fileName: element.relativePath };
            this.imageProduct?.push(img);
        });

        this.productData.images = this.imageProduct;
        this.productsService.addImg(formData).subscribe();
        this.productsService.addProduct(productData).subscribe();
    }

    async getFileFromEntry(fileEntry: FileSystemFileEntry): Promise<File> {
        return new Promise((resolve) => {
            fileEntry.file((file: File) => {
                resolve(file);
            });

        });
    }

    public files: NgxFileDropEntry[] = [];

    public fileOver(event: any) {
        //console.log(event);
    }

    public fileLeave(event: any) {
        //console.log(event);
    }

    public fileDrop(event: any) {
        const validExtensions = ['.jpg'];
        this.files = event.filter((file: NgxFileDropEntry) => {
            if (file.fileEntry?.isFile) {
                const fileEntry = file.fileEntry as FileSystemFileEntry;
                if (fileEntry.name) {
                    const extension = fileEntry.name.split('.').pop()?.toLowerCase();
                    if (!(extension && validExtensions.includes('.' + extension))) {
                        console.log("invalid file: must be .jpg")
                    }
                    const uniqueName = this.generateUniqueFileName(fileEntry.name);

                    file.relativePath = uniqueName;

                    return extension && validExtensions.includes('.' + extension);
                }
            }
            return false;
        });
    }
    private generateUniqueFileName(originalFileName: string): string {
        const timestamp = new Date().getTime();
        const randomString = Math.random().toString(36).substring(7);
        const extension = originalFileName.split('.').pop();
        const uniqueName = `${timestamp}_${randomString}.${extension}`;
        return uniqueName;
    }

}