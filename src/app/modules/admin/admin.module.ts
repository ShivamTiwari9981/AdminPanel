import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContectUsComponent } from './component/contect-us/contect-us.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppViewComponent } from './component/app-view/app-view.component';
import { UserComponent } from './component/user/user.component';
import { RoleComponent } from './component/role/role.component'


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContectUsComponent,
    AppViewComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
