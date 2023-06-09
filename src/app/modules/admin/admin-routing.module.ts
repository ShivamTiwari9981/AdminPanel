import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ContectUsComponent } from './component/contect-us/contect-us.component';
import { AboutComponent } from './component/about/about.component';
import { AppViewComponent } from './component/app-view/app-view.component';
import { UserComponent } from './component/user/user.component';
import { RoleComponent } from './component/role/role.component';

const routes: Routes = [
{path:'',component:AdminDashboardComponent,
children:[
  {path:'home',component:HomeComponent, data : {title:'Home'}},
  {path:'contect',component:ContectUsComponent, data : {title:'Contect'}},
  {path:'about',component:AboutComponent},
  {path:'appview',component:AppViewComponent},
  {path:'user',component:UserComponent, data : {title:'User'}},
  {path:'role',component:RoleComponent, data : {title:'Role'}},
  {path:'',redirectTo:'/admin/home',pathMatch:'full'},

]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
