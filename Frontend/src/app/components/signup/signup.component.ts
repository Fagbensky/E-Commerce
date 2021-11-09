import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from 'src/app/services/auth-route.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Login, LoginResponse } from '../login/loginInterface';
import { Signup } from './signupInterface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email?: string;
  name?: string;
  password?: string;
  password_confirmation?: string; 

  public error: any = [];

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private authRoute: AuthRouteService
    ) { }

  ngOnInit(): void {
  }


  onSubmit() {

    const signup: Signup = {
      email: this.email,
      name: this.name,
      password: this.password,
      password_confirmation: this.password_confirmation
    }

    this.auth
      .signup(signup)
      .subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
    )
  }

  handleResponse(data: LoginResponse){
    this.token.handleToken(data.access_token);
    this.authRoute.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error:any ) {
    this.error = error.error.errors;
  }

}