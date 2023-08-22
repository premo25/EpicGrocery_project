import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { RouterModule } from '@angular/router';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MidCardComponent } from './components/mid-card/mid-card.component';
import { RegCardComponent } from './components/reg-card/reg-card.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ServicesComponent } from './components/services/services.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { GreetComponent } from './components/greet/greet.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    MainNavbarComponent,
    SmallCardComponent,
    MidCardComponent,
    RegCardComponent,
    ProductGroupComponent,
    ServicesComponent,
    OfferCardComponent,
    ContactUsComponent,
    FooterPageComponent,
    ProductPageComponent,
    GreetComponent
  ],
  imports: [
    CommonModule,RouterModule,MatButtonModule,MatMenuModule
  ],
  exports:[MainNavbarComponent, NavbarComponent,RegCardComponent,OfferCardComponent,FooterPageComponent,ServicesComponent,ContactUsComponent,ProductGroupComponent,SmallCardComponent]
})
export class GlobleModule { }
