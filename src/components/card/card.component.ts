import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { generateSlug } from '../UtilsService/utils.service';
import {ProductService} from '../ProductService/product-service.service';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent
{
  @Input() product: any;

  constructor(private router: Router,
              private productService: ProductService)
  {}

  goToProduct(product: any): void {
    const slug = generateSlug(product.title);
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate([`/product/${slug}`]);
  }

}
