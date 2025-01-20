import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {ProductComponent} from '../components/product/product.component';
import {BrandComponent} from '../components/brand/brand.component';
import {ErrorComponent} from '../components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Página principal
  { path: 'product/:slug', component: ProductComponent }, // Ruta para el producto
  { path: 'brands', component: BrandComponent },
  { path: '**', component: ErrorComponent }, // Ruta para el error (cuando la ruta no es válida)
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
