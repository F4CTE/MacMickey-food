import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ClientComponent } from './client/client.component';
import { InfoComponent } from './client/info/info.component';
import { FormComponent } from './client/form/form.component';
import { ProductComponent } from './products/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './client/address/address.component';
import { AddressService } from './services/address.service';
import { ClientService } from './services/client.service';
import { CountryService } from './services/country.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ClientComponent,
    InfoComponent,
    FormComponent,
    ProductComponent,
    FooterComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AddressService,
    ClientService,
    CountryService,
    OrderService,
    ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
