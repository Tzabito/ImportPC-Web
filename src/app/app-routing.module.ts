import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {ProductComponent} from '../components/product/product.component';
import {BrandComponent} from '../components/brand/brand.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:slug', component: ProductComponent }, // Ruta para el producto
  { path: 'brands', component: BrandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
