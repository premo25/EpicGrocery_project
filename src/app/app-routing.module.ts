import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './globle/components/navbar/navbar.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { MainNavbarComponent } from './globle/components/main-navbar/main-navbar.component';
import { AppComponent } from './app.component';
import { ForgetpasswordComponent } from './shared/components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SmallCardComponent } from './globle/components/small-card/small-card.component';
import { MidCardComponent } from './globle/components/mid-card/mid-card.component';
import { RegCardComponent } from './globle/components/reg-card/reg-card.component';
import { ProductGroupComponent } from './globle/components/product-group/product-group.component';
import { ServicesComponent } from './globle/components/services/services.component';
import { OfferCardComponent } from './globle/components/offer-card/offer-card.component';
import { ContactUsComponent } from './globle/components/contact-us/contact-us.component';
import { FooterPageComponent } from './globle/components/footer-page/footer-page.component';
import { ProductPageComponent } from './globle/components/product-page/product-page.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { GreetComponent } from './globle/components/greet/greet.component';
import { NewProductComponent } from './shared/components/new-product/new-product.component';
import { OffersComponent } from './shared/components/offers/offers.component';
import { StoreLocationComponent } from './shared/components/store-location/store-location.component';

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'', 
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path:'product-group',
    component:ProductGroupComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
    
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  {
    path:'main-nav',
    component:MainNavbarComponent
  },
  {
    path:'forgot',
    component:ForgetpasswordComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'small-card',
    component:SmallCardComponent
  },
  {
    path:'mid-card',
    component:MidCardComponent
  },
  {
    path:'offer-card',
    component:OfferCardComponent
  },
  {
    path:'reg-card',
    component:RegCardComponent
  },
  {
    path:'service',
    component:ServicesComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'footer',
    component:FooterPageComponent
  },
  {
    path:'product',
    component:ProductPageComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'greet',
    component:GreetComponent
  },
  {
    path:'new',
    component:NewProductComponent
  },
  {
    path:'offer-page',
    component:OffersComponent
  },
  {
    path:'store-location',
    component:StoreLocationComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
