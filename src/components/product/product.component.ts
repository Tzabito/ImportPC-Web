import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from './ProductService/product-service.service';

declare const MercadoPago: any; // Declaración del SDK de Mercado Pago

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {

  mp: any; // SDK de Mercado Pago
  product: any = {};
  imageList: string[] = [];
  selectedImage: string = '';  // Imagen seleccionada
  currentIndex: number = 0;  // Índice para el carrusel
  visibleImages: string[] = [];  // Imágenes visibles en el carrusel (4 imágenes)
  preferenceId: string = ''; // ID de la preferencia de Mercado Pago

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Inicializa el SDK de Mercado Pago con tu clave pública
    this.mp = new MercadoPago('APP_USR-fa32bab8-b864-4f16-aeef-6a23194cc67a', {
      locale: 'es-PE', // Configura el idioma
    });

    // Obtener datos del producto desde localStorage
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

      // Crear la preferencia de pago
      this.createPaymentPreference();
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

  // Crear la preferencia de pago con Mercado Pago
  createPaymentPreference(): void {
    // Llamamos al backend para crear la preferencia y obtener el ID
    fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer APP_USR-798770250958961-012003-e5169cae92ee02e846419cbf1ddd3fc6-425285719` // Reemplaza con tu Access Token de Mercado Pago
      },
      body: JSON.stringify({
        items: [
          {
            title: this.product.title,
            unit_price: parseFloat(this.product.price_s),
            quantity: 1
          }
        ],
        back_urls: {
          success: 'https://forjapc.netlify.app/success',
          failure: 'https://forjapc.netlify.app/failure',
          pending: 'https://forjapc.netlify.app/pending'
        },
        auto_return: 'approved'
      })
    })
      .then(response => response.json())
      .then(data => {
        this.preferenceId = data.id; // Guardamos el ID de la preferencia
        this.initMercadoPagoCheckout(); // Inicializamos el checkout
      })
      .catch(error => console.error('Error al crear preferencia:', error));
  }

  // Inicializar el botón de pago de Mercado Pago
  initMercadoPagoCheckout(): void {
    this.mp.bricks().create('wallet', 'wallet_container', {
      initialization: {
        preferenceId: this.preferenceId // Usamos el ID de la preferencia creada
      }
    });
  }
}
