import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-password/request-password.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path:'login', 
    component: LoginComponent, 
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup', 
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'profile', 
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'password-reset', 
    component: RequestResetComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'reset-response', 
    component: ResponseResetComponent,
    canActivate: [AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
