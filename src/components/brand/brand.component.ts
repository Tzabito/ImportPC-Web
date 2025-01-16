import { Component } from '@angular/core';
import {brands} from './brands';

@Component({
  selector: 'app-brand',
  standalone: false,

  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  title = 'Brand Cards';
  brandList = brands;
}
