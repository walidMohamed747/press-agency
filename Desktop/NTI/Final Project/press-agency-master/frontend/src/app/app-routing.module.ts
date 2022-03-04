import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditiorComponent } from './pages/editior/editior.component';

const routes: Routes = [
  {path :"" , redirectTo:"/login" , pathMatch: 'full'} ,
  
  {path : "editor" , component : EditiorComponent},
  {path :"register" , component: RegisterComponent } ,
  {path: "login" , component : LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
