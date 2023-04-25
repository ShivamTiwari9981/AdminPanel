import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AdminModule } from '../app/modules/admin/admin.module';
import{ReactiveFormsModule,FormsModule}from '@angular/forms';
import { ApiResponseService } from '../app/service/api-response.service';
import { LogoutComponent } from './components/logout/logout.component';
import { CookieService } from 'ngx-cookie-service';

import { RoleService } from './service/role/role.service';
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
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [ApiResponseService,RoleService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
