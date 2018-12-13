import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import{FormsModule} from '@angular/forms'

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const appRoutes:Routes = [
  {path:'',redirectTo:'log',pathMatch:'full'},
  { path: 'log',component: LoginComponent },
  {path:'desh', canActivate:[AuthGuard],component:AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ AuthGuard,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
