import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  private currentSlide = 0;
  private touchStartX = 0;
  private touchEndX = 0;
  private isDragging = false;
  private dragStartX = 0;
  private autoSlideInterval: any;
  private readonly INTERVAL = 5000; // Интервал автоматической прокрутки

  constructor() {
    this.startAutoSlide();
  }

  getCurrentSlide() {
    return this.currentSlide;
  }

  showSlide(slideIndex: number): void {
    const slidesContainer = document.querySelector('.slides') as HTMLElement;
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  }

  updateActiveDot(): void {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  updateActiveThumb(): void {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
      if (index === this.currentSlide) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  nextSlide(): void {
    const slides = document.querySelectorAll('.slides img');
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    this.showSlide(this.currentSlide);
  }

  prevSlide(): void {
    const slides = document.querySelectorAll('.slides img');
    this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
    this.showSlide(this.currentSlide);
  }

  handleSwipe(): void {
    const SWIPE_THRESHOLD = 50;
    const deltaX = this.touchEndX - this.touchStartX;

    if (deltaX > SWIPE_THRESHOLD) {
      this.prevSlide();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      this.nextSlide();
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
      this.updateActiveDot();
      this.updateActiveThumb();
    }, this.INTERVAL);
  }

  stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  handleTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];
    const touchMoveX = touch.clientX;
    const deltaX = touchMoveX - this.touchStartX;
    const slides = document.querySelectorAll('.slides img');

    if (
      (this.currentSlide === 0 && deltaX > 0) ||
      (this.currentSlide === slides.length - 1 && deltaX < 0)
    ) {
      event.preventDefault();
    }
  }

  handleTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragStartX = event.clientX;
  }

  handleMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }

    const dragCurrentX = event.clientX;
    const deltaX = dragCurrentX - this.dragStartX;

    if (deltaX > 0) {
      this.prevSlide();
    } else if (deltaX < 0) {
      this.nextSlide();
    }

    this.isDragging = false;
  }

  handleMouseUp(): void {
    this.isDragging = false;
  }
}