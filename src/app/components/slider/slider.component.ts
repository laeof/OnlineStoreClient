import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
    @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

    constructor(public sliderService: SliderService, public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;

    ngOnInit(): void {
        this.sliderService.showSlide(this.sliderService.getCurrentSlide());
        this.sliderService.updateActiveDot();
        this.sliderService.updateActiveThumb();
    }

    prevSlide(): void {
        this.sliderService.prevSlide();
        this.sliderService.updateActiveDot();
        this.sliderService.updateActiveThumb();
    }

    nextSlide(): void {
        this.sliderService.nextSlide();
        this.sliderService.updateActiveDot();
        this.sliderService.updateActiveThumb();
    }

    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: MouseEvent): void {
        this.sliderService.stopAutoSlide();
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: MouseEvent): void {
        this.sliderService.startAutoSlide();
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        this.sliderService.handleMouseDown(event);
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        this.sliderService.handleMouseMove(event);
        this.sliderService.updateActiveDot();
        this.sliderService.updateActiveThumb();
    }

    @HostListener('mouseup')
    onMouseUp(): void {
        this.sliderService.handleMouseUp();
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent): void {
        this.sliderService.handleTouchStart(event);
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent): void {
        this.sliderService.handleTouchMove(event);
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: TouchEvent): void {
        this.sliderService.handleTouchEnd(event);
        this.sliderService.updateActiveDot();
        this.sliderService.updateActiveThumb();
    }
}
