import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = [
    'promotion01.jpg',
    'promotion02.jpg',
    'promotion03.jpg'
  ];

  images_promo = [
    { src: 'promo01.png', alt: 'Promo 1' },
    { src: 'promo02.png', alt: 'Promo 2' },
    { src: 'promo02.png', alt: 'Promo 2' },
    { src: 'promo02.png', alt: 'Promo 2' },
    { src: 'promo02.png', alt: 'Promo 2' },
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

  products = [
    {
      code: '0001',
      image: 'video_card_01.jpg',
      image01: 'video_card_01.jpg',
      image02: 'video_card_02.jpg',
      image03: 'video_card_03.jpg',
      image04: 'video_card_04.jpg',
      image05: 'video_card_05.jpg',
      image06: 'video_card_06.jpg',
      title: 'Pc Powered By Asus, Intel Core i7-12700F, 32GB DDR5, SSD 1TB, RTX 4070 SUPER, F/750W, CASE',
      brand: 'Asus',
      price_s: '6.152',
      price_d: '1.669.00',
      description: 'Description',
      stock: '5'
    },
    {
      code: '0002',
      image: 'video_card_02.jpg',
      image01: 'video_card_01.jpg',
      image02: 'video_card_02.jpg',
      image03: 'video_card_02.jpg',
      image04: 'video_card_02.jpg',
      image05: 'video_card_01.jpg',
      image06: 'video_card_01.jpg',
      title: 'Pc Powered By MSI, Ryzen 5 5600X, 16GB DDR4, SSD 500GB, RTX 3060, F/650W, CASE',
      brand: 'MSI',
      price_s: '4.799',
      price_d: '1.299.00',
      description: 'Description',
      stock: '10'
    },
    {
      code: '0003',
      image: 'video_card_03.jpg',
      image01: 'video_card_01.jpg',
      image02: 'video_card_02.jpg',
      image03: 'video_card_02.jpg',
      image04: 'video_card_02.jpg',
      image05: 'video_card_02.jpg',
      image06: 'video_card_02.jpg',
      title: 'Pc Powered By MSI, Ryzen 5 5600X, 16GB DDR4, SSD 500GB, RTX 3060, F/650W, CASE',
      brand: 'MSI',
      price_s: '2.399',
      price_d: '1.299.00',
      description: 'Description',
      stock: '5'
    },
    {
      code: '0004',
      image: 'video_card_04.jpg',
      image01: 'video_card_01.jpg',
      image02: 'video_card_02.jpg',
      image03: 'video_card_02.jpg',
      image04: 'video_card_02.jpg',
      image05: 'video_card_02.jpg',
      image06: 'video_card_02.jpg',
      title: 'Pc Powered By MSI, Ryzen 5 5600X, 16GB DDR4, SSD 500GB, RTX 3060, F/650W, CASE',
      brand: 'MSI',
      price_s: '4.799',
      price_d: '1.299.00',
      description: 'Description',
      stock: '11'
    },

  ];
}
