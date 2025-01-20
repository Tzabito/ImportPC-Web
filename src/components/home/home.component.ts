import { Component, OnInit, OnDestroy } from '@angular/core';
import {brands} from '../brand/brands';
import {products} from '../product/products';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = [
    '/assets/images/promos/promotion01.jpg',
    '/assets/images/promos/promotion02.jpg',
    '/assets/images/promos/promotion03.jpg'
  ];

  //List of Products
  products = products;

  images_promo = [
    { src: '/assets/images/promos/promo01.png', alt: 'Promo 1' },
    { src: '/assets/images/promos/promo02.png', alt: 'Promo 2' },
    { src: '/assets/images/promos/promo02.png', alt: 'Promo 2' },
    { src: '/assets/images/promos/promo02.png', alt: 'Promo 2' },
    { src: '/assets/images/promos/promo02.png', alt: 'Promo 2' },
  ];

  currentIndex: number = 0;

  prevImage(event: Event): void {
    event.preventDefault();
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(event: Event): void {
    event.preventDefault();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },4000); // Cambia la imagen cada 4 segundos
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }
}
