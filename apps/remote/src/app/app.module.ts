import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ProducthomeComponent } from './producthome/producthome.component';
// import { LoginformComponent } fro./login/loginform/loginform.componentent';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ProducthomeComponent],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
