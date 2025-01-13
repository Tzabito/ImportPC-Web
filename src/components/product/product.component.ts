import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../ProductService/product-service.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  product: any = {};
  imageList: string[] = [];
  selectedImage: string = '';  // Imagen seleccionada
  currentIndex: number = 0;  // Índice para el carrusel
  visibleImages: string[] = [];  // Imágenes visibles en el carrusel (4 imágenes)

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const productData = localStorage.getItem('selectedProduct');

    if (productData) {
      this.product = JSON.parse(productData);

      // Agregar imágenes del producto a la lista
      this.imageList.push(this.product.image01);
      this.imageList.push(this.product.image02);
      this.imageList.push(this.product.image03);
      this.imageList.push(this.product.image04);
      this.imageList.push(this.product.image05);
      this.imageList.push(this.product.image06);

      // Seleccionar la primera imagen por defecto
      this.selectedImage = this.imageList[0];

      // Inicializar las imágenes visibles
      this.updateVisibleImages();
    } else {
      console.error('No product data available');
    }
  }

  // Función para seleccionar una imagen
  selectImage(image: string): void {
    this.selectedImage = image;
  }

  // Función para obtener las imágenes visibles (en bloques de 4)
  updateVisibleImages(): void {
    this.visibleImages = [
      this.imageList[(this.currentIndex) % this.imageList.length],
      this.imageList[(this.currentIndex + 1) % this.imageList.length],
      this.imageList[(this.currentIndex + 2) % this.imageList.length],
      this.imageList[(this.currentIndex + 3) % this.imageList.length],
    ];
  }

  // Función para navegar a la imagen anterior (cambia el bloque de imágenes)
  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
    this.updateVisibleImages();
  }

  // Función para navegar a la imagen siguiente (cambia el bloque de imágenes)
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    this.updateVisibleImages();
  }
}

