import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-password/request-password.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { AuthRouteService } from './services/auth-route.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService, 
    TokenService, 
    AuthRouteService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
