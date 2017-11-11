import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import {AppRoutes} from "./app.routes";
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    LoginComponent,
    SignUpComponent,

  ],
  imports: [

    RouterModule.forRoot(AppRoutes),
    BrowserModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
