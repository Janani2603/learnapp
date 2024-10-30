import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { AddcartComponent } from './addcart/addcart.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { TokenComponent } from './token/token.component';




@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AddcartComponent,
    HttpComponent,
    ReactiveComponent,
    FormbuilderComponent,
    Reactive2Component,
    TokenComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
