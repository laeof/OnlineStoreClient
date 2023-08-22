import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { ICategory } from 'src/app/models/category'
import { ICreateProduct, IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { CategoryService } from 'src/app/services/category/category.service'
import { ModalService } from 'src/app/services/modal/modal.service'
import { NavigationSettingsService } from 'src/app/services/navigation-settings/navigation_settings.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
})

export class AddProductPage {
    categories: ICategory[] = [];
    productData: ICreateProduct = {
        amount: null,
        name: '',
        description: null,
        price: 0,
        categoryId: '',
        images: null,
        monitor: {
            diagonal: '',
            brightness: null,
            maxtrixType: null,
            ratio: null,
            reaction: null,
            frequency: null,
            interfaces: null,
            contrast: null
        },
        keyboard: {

        }
    };
    http: any
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

    addProduct(productData: ICreateProduct) {
        this.productsService.addProduct(productData).subscribe();
    }

    public files: NgxFileDropEntry[] = [];

    public dropped(files: NgxFileDropEntry[]) {
        this.files = files;
        for (const droppedFile of files) {

            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {

                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);

                    // You could upload it like this:
                    const formData = new FormData()
                    formData.append('logo', file, droppedFile.relativePath)

                    
                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

    public fileOver(event: any) {
        console.log(event);
    }

    public fileLeave(event: any) {
        console.log(event);
    }
}