import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AdminModule } from '../app/modules/admin/admin.module';
import{ReactiveFormsModule,FormsModule}from '@angular/forms';
import { ApiResponseService } from '../app/service/api-response.service';
import { LogoutComponent } from './components/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    PageNotFoundComponent,
    RecoverPasswordComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbToastModule,
    NgIf
  ],

  providers: [ApiResponseService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
