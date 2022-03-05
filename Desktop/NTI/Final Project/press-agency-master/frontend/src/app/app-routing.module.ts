import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditiorComponent } from './pages/editior/editior.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path :"" , redirectTo:"/login" , pathMatch: 'full'} ,
  {path : "user" , component :UserComponent},
  {path : "editor" , component : EditiorComponent},
  {path :"register" , component: RegisterComponent } ,
  {path: "login" , component : LoginComponent} ,
  {path : "error" , component:ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
