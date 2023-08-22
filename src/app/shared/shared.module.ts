import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MainNavbarComponent } from '../globle/components/main-navbar/main-navbar.component';
import { GlobleModule } from '../globle/globle.module';
import { CartComponent } from './components/cart/cart.component';
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewProductComponent } from './components/new-product/new-product.component';
import { OffersComponent } from './components/offers/offers.component';
import { ShopComponent } from './components/shop/shop.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgetpasswordComponent,
    HomeComponent,
    CartComponent,
    NewProductComponent,
    OffersComponent,
    ShopComponent,
    StoreLocationComponent,

  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule, GlobleModule,ToastrModule.forRoot(),
    BrowserAnimationsModule
  ]

})
export class SharedModule { }
