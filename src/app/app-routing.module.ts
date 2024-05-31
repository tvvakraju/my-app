import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeicomeComponent } from './weicome/weicome.component';
import { IamsudhaComponent } from './iamsudha/iamsudha.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  {path:'raju',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'welcome',component:WeicomeComponent},
  {path:'sudha',component:IamsudhaComponent},
  {path:'directives',component:DirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
 }
