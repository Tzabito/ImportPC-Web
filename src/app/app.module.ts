import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from '../components/header/header.component';
import {MatIcon} from '@angular/material/icon';
import { HomeComponent } from '../components/home/home.component';
import { CardComponent } from '../components/card/card.component';
import { ProductComponent } from '../components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
