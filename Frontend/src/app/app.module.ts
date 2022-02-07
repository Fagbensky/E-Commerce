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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/login/auth.service';
import { TokenService } from './services/login/token.service';
import { AuthRouteService } from './services/login/auth-route.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './components/cart/cart.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExtraComponent } from './components/homepage/hero/extra/extra.component';
import { AdsBannerComponent } from './components/homepage/ads-banner/ads-banner.component';
import { PersonalizedProductsComponent } from './components/homepage/personalized-products/personalized-products.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { AdsbannerService } from './services/homepage/ads/adsbanner.service';
import { ReasonsComponent } from './components/homepage/reasons/reasons.component';
import { ItemsComponent } from './components/homepage/reasons/items/items.component';
import { TodaysProductComponent } from './components/homepage/todays-product/todays-product.component';
import { NewsletterBannerComponent } from './components/homepage/newsletter-banner/newsletter-banner.component';

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
    HeroComponent,
    HomepageComponent,
    ExtraComponent,
    AdsBannerComponent,
    PersonalizedProductsComponent,
    CardsComponent,
    ReasonsComponent,
    ItemsComponent,
    TodaysProductComponent,
    NewsletterBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    AdsbannerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
