import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {LoginformComponent} from "./loginform/loginform.component"

@NgModule({
  declarations: [LoginComponent,LoginformComponent],
  imports: [CommonModule, LoginRoutingModule,FormsModule,HttpClientModule],
})
export class LoginModule {}
