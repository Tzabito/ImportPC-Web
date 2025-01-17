import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productData: any;

  setProduct(product: any): void {
    this.productData = product;
  }

  getProduct(): any {
    return this.productData;
  }
}
