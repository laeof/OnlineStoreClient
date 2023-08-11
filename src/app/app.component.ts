import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products/products.service';
import { SidebarService, IElements } from './services/sidebar/sidebar.service';
import { ModalService } from './services/modal/modal.service';
import { SliderService } from './services/slider/slider.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'ang app';
  products: IProduct[] = [];
  elements: IElements;

  constructor(private productsService: ProductsService,
    private sidebarService: SidebarService,
    public modalService: ModalService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products;
    });

    this.sidebarService.elements$.subscribe(elements => {
      this.elements = elements;
    });

    this.sidebarService.setElements();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

}