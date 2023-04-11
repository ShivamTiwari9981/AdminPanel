import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'logout',component:LogoutComponent},
{path:'forget-password',component:ForgetPasswordComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'admin',
loadChildren:()=>
import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
