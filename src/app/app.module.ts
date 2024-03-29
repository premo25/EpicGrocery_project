import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobleModule } from './globle/globle.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';  
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,SharedModule,GlobleModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,FormsModule,RouterModule, BrowserAnimationsModule,MatButtonModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
